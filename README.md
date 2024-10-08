### 1. declare isolated content script:

#### manifest.json
```json
 "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["src/content-isolated.ts"]
    }
  ],
```
### 2. inject mainWorld script into DOM 
#### content-main.ts
```typescript
//@ts-expect-error ?script is fine
import scriptPath from './content-main?script&module';

const script = document.createElement('script');
script.type = 'module'; // if you wanna use imports
script.src = chrome.runtime.getURL(scriptPath);

document.body.appendChild(script);
```

### 3. render component to DOM
```typescript
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Demo } from './components/demo';

const div = document.createElement('div');
div.id = 'crx-root';
document.body.prepend(div);
ReactDOM.createRoot(div).render(React.createElement(Demo));
```


---

### 4. IMPORTANT NOTES!
- there are some issues with react refresh in main world. This can be solved by excluding the specific component: (vite.config.ts):
```typescript
export default defineConfig({
  plugins: [react({
    exclude: [
      // '**/*.tsx', // exclude all tsx files from fast refresh
      'src/components/demo.tsx', // or just the one you want to inject in main world
    ]
  }), crx({ manifest })],
});

```

- Main world can't use chrome.runtime.connect without defining externally connectable URLs in manifest.

```json
"externally_connectable": {
  "ids": [],
  "matches": ["<all_urls>"]
}
```
