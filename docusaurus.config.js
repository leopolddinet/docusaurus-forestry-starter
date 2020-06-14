module.exports = {
  title: 'LDTI',
  tagline: 'The tagline of my site',
  url: 'https://ldti.fr',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'LDTI', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'logo LDTI',
        src: 'img/logoLTDI.jpg',
      },
      links: [
        {
          to: 'Docs/',
          activeBasePath: 'Docs',
          label: 'Activités',
          position: 'left',
        },
        {to: 'blog', label: 'Réalisations', position: 'left'},
        {
          href: 'https://www.linkedin.com/in/soci%C3%A9t%C3%A9-ldti-390aa71aa/',
          label: 'LinkedIn',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More',
          items: [
            {
              label: 'Réalisations',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/leopolddinet',
            },
          {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/soci%C3%A9t%C3%A9-ldti-390aa71aa/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date()}. LDTI <br/>07 82 50 87 95 - leopold.dinet@ldti.fr`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
