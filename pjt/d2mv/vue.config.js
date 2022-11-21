const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
}), {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/scss/navbar.scss";`
        // `@import "@/assets/scss/moviecard.scss";`
      }
    }
  }
}