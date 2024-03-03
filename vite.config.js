import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import VitePluginSvgSpritemap from '@spiriit/vite-plugin-svg-spritemap';
import { webfontDownload } from 'vite-plugin-webfont-dl';

export default defineConfig(() => {
  return {
    plugins: [
      webfontDownload(),
      VitePluginSvgSpritemap('./src/assets/icons/*.svg'),
      ViteImageOptimizer({
        png: {
          quality: 80
        },
        jpg: {
          quality: 80
        },
        webp: {
          lossless: true
        },
        svgo: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  removeViewBox: false,
                },
              },
            },
          ],
        },
      }),
    ],
  };
});
