// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "AIConfig",
  tagline:
    "Config-driven, source control friendly AI application development framework",
  favicon: "img/favicon-light-theme.ico",

  // Set the production url of your site here
  url: "https://aiconfig.lastmileai.dev",
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "lastmile-ai", // Usually your GitHub org/user name.
  projectName: "aiconfig", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
        gtag: {
          trackingID: "G-JYD7V9L7DR",
          anonymizeIP: false,
        },
      }),
    ],
  ],
  plugins: ["docusaurus-plugin-sass"],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/readme_logo.jpg",
      navbar: {
        logo: {
          alt: "AI Config Logo",
          src: "img/aiConfigLogo_Dark.svg",
          srcDark: "img/aiConfigLogo_Light.svg",
        },
        items: [
          {
            to: "/docs/basics",
            label: "Overview",
            position: "left",
          },
          {
            to: "/docs/getting-started",
            label: "Getting Started",
            position: "left",
          },
          {
            to: "/docs/overview/ai-config-format",
            label: "Specification",
            position: "left",
          },
          {
            href: "https://github.com/lastmile-ai/aiconfig",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
          {
            href: "https://discord.com/invite/xBhNKTetGx",
            position: "right",
            className: "header-discord-link",
            "aria-label": "Discord Community",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Developers",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/lastmile-ai/aiconfig",
              },
              {
                label: "Blog",
                href: "https://blog.lastmileai.dev",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.com/invite/xBhNKTetGx",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/LastMile",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/lastmile-ai/",
              },
            ],
          },
          {
            title: "Legal",
            items: [
              {
                label: "Privacy",
                href: "https://lastmileai.dev/privacy",
              },
              {
                label: "Terms",
                href: "https://lastmileai.dev/terms",
              },
            ],
          },
        ],
        copyright: "Copyright © 2023 LastMile AI, Inc.",
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      prism: {
        defaultLanguage: "jsx",
        theme: require("./core/prismTheme"),
        additionalLanguages: [
          "bash",
          "json",
          "json5",
          "jsonp",
          "python",
          "java",
          "kotlin",
          "objectivec",
          "swift",
          "groovy",
          "ruby",
          "flow",
        ],
      },
      algolia: {
        appId: "MXLMDZIH1G",
        apiKey: "ae2a15a60477c4a9ab7840b2a1e640fc",
        indexName: "aiconfig",
        contextualSearch: true,
      },
    }),
};

module.exports = config;
