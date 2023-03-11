// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  icon: {
    favicon: {
      src: "./src/assets/images/logo/favicon.png",
      sizes: [16, 32, 96],
    },
    touchicon: {
      src: "./src/assets/images/logo.png",
      sizes: [76, 152, 120, 167],
      precomposed: true,
    },
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "./src/data/posts/*.md",
        typeName: "Post",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "./src/data/flags/*.md",
        typeName: "Flag",
      },
    },
  ],
  siteName: "Don Bosco für Flüchtlinge",
  siteUrl: "https://stb.webbees.at",
  // templates: {
  //   Post: "/news/:id",
  // },
  titleTemplate: "%s | Don Bosco für Flüchtlinge",
};
