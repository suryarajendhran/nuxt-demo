module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "Surya's Nuxt Demo",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=NTR" }
    ],
    bodyAttrs: {
      class: "hidden"
    }
  },
  css: ["~/assets/main.css"],
  plugins: [{ ssr: false, src: "~plugins/appear" }],
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
