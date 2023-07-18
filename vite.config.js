import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// const ASSET_URL = process.env.ASSET_URL || '';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // NEED base UNCOMMENTED TO DEPLOY TO GITHUB PAGES; comment to test locally
  base: "/guard-the-lion-shrine/",
});
