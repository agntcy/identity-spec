import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type { ScalarOptions } from '@scalar/docusaurus'

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'PyramID',
  tagline: 'Decentralized Identity Management',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://agntcy.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Agntcy', // Usually your GitHub org/user name.
  projectName: 'PyramID', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      '@scalar/docusaurus',
      {
        label: 'OpenAPI',
        route: '/openapi/v1alpha1',
        configuration: {
          spec: {
            url: '/api/openapi/v1alpha1/openapi.yaml',
          },
        },
      } as ScalarOptions,
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
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

  themeConfig: {
    navbar: {
      title: 'PyramID',
      logo: {
        alt: 'PyramID Engine',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: 'protodocs/agntcy/pyramid/v1alpha1/did.proto',
          activeBasePath: 'protodocs',
          label: 'Protodocs',
          position: 'left',
        },
        {
          href: 'https://github.com/cisco-eti/pyramid',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {},
        {},
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/cisco-eti/pyramid',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PyramID. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
