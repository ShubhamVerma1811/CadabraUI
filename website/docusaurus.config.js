/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'CadabraUI',
  tagline: 'A React UI library that generates the styles for you!',
  url: 'https://cadabraui.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    hideableSidebar: true,
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      title: 'CadabraUI',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/ShubhamVerma1811/CadabraUI',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: '/docs',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ShubhamVerma1811/CadabraUI',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CadabraUI
      <br />
      Made with ❤ by <a href="https://shubhamverma.me" target="_blank" rel="noreferrer noopener" aria-label="Shubham Verma portfolio link">Shubham Verma </a> using Docusaurus. Hosted on Vercel`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/ShubhamVerma1811/CadabraUI/tree/dev/edit/dev/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themes: ['@docusaurus/theme-live-codeblock'],
  scripts: [
    {
      src: 'https://umami-azure.vercel.app/umami.js',
      async: true,
      defer: true,
      'data-website-id': '2074faf3-cdef-451d-a66a-ad4fd7e16c9a',
    },
  ],
}
