import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type { ScalarOptions } from '@scalar/docusaurus'

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Identity',
  tagline: 'Decentralized Identity Management',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://agntcy.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AGNTCY', // Usually your GitHub org/user name.
  projectName: 'Identity', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: ['./src/css/custom.css'],
        },
      } satisfies Preset.Options,
    ],
    [
      'docusaurus-protobuffet',
      {
        protobuffet: {
          fileDescriptorsPath: './static/api/proto/v1alpha1/proto_workspace.json',
          protoDocsPath: './protodocs',
          sidebarPath: './generatedSidebarsProtodocs.js',
        },
        docs: {
          routeBasePath: 'protodocs',
          sidebarPath: './generatedSidebarsProtodocs.js',
        }
      }
    ]
  ],

  plugins: [
    [
      '@scalar/docusaurus',
      {
        label: 'OpenAPI',
        route: '/openapi/v1alpha1',
        showNavLink: true,
        configuration: {
          url: '/api/openapi/v1alpha1/openapi.yaml',
          hideDarkModeToggle: true,
          layout: 'modern',
          customCss: './src/css/custom.css'
        },
      } as ScalarOptions,
    ],
  ],

  themeConfig: {
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: 'Identity',
      logo: {
        alt: 'Identity Engine',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg'
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: 'protodocs/agntcy/identity/v1alpha1/did.proto',
          activeBasePath: 'protodocs',
          label: 'Protodocs',
          position: 'left',
        },
        {
          href: 'https://github.com/agntcy/identity-spec',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {
          title: 'Community',
          items: [
            {
              label: 'AGNTCY',
              href: 'https://github.com/agntcy',
            },
            {
              label: 'Identity',
              href: 'https://github.com/agntcy/identity-spec',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AGNTCY. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
};

export default config;
