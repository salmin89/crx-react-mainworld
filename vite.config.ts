import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { crx } from "@crxjs/vite-plugin";
import manifest from "./manifest.json";

export default defineConfig({
  plugins: [react({
    exclude: [
      // '**/*.tsx', // exclude all tsx files from fast refresh
      'src/components/demo.tsx', // or just the one you want to inject in main world
    ]
  }), crx({ manifest })],
});
