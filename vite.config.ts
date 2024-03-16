import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "logo192.png", "mask-icon.svg"],
      // TODO add mask icon
      manifest: {
        name: "श्रीमद्भगवद्गीता",
        short_name: "श्रीमद्भगवद्गीता",
        description: "Shrimad Bhagavad Gita verses in cards with commentary",
        theme_color: "#ffffff",
        icons: [
          {
            src: "logo192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "logo215.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  base: "/gita-cards/",
});
