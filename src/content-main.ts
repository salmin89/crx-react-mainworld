// ISSUE:
// https://github.com/vitejs/vite-plugin-react/issues/11#discussion_r430879201
//@ts-expect-error is fine
window.$RefreshReg$ = () => {};
//@ts-expect-error is fine
window.$RefreshSig$ = () => (type) => type;
//@ts-expect-error is fine
window.__vite_plugin_react_preamble_installed__ = true;

///////

import React from 'react';
import ReactDOM from 'react-dom/client';

const div = document.createElement('div');
div.id = 'crx-root';
document.body.prepend(div);


// Dynamic import because of some react refresh issue
// import { Demo } from './components/demo';
import('./components/demo').then(({Demo}) => {
  ReactDOM.createRoot(div).render(React.createElement(Demo));
});