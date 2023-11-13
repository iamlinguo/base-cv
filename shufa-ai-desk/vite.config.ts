import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import * as path from "path";

export default defineConfig({
  base: "./",

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "view": path.resolve(__dirname, "src/view"),
      "components": path.resolve(__dirname, "src/components"),
      "assets": path.resolve(__dirname, "src/assets"),
      "store": path.resolve(__dirname, "src/store"),
      "mixins": path.resolve(__dirname, "src/mixins")
    }
  },
  plugins: [
    vue(),
    vueJsx({

    }),
    Components({
      resolvers: [AntDesignVueResolver()]
    })
  ],
  server: {
    open: true,
    port: 8891,
    proxy: {
      '/api': { // 请求接口中要替换的标识
        target: 'http://127.0.0.1:5000', // 代理地址
        changeOrigin: true, // 是否允许跨域
        secure: true,
      }
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#1DA57A',
            'link-color': '#1DA57A',
            'border-radius-base': '2px',
          },
          javascriptEnabled: true,
        }
      }
    }
  },
  build: {
    chunkSizeWarningLimit: 1600
  }
})
