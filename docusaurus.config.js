module.exports = {
  title: '1111LDTI',
  tagline: 'Vous dirigez une MIC, TPE, PME ou plus grande entreprise industrielle et votre activité demande à se développer, votre bureau d’études a trop de projets à gérer et n’arrive pas à produire les dossiers techniques à temps ou vous n’avez pas de bureau d’études et vous souhaitez fabriquer vos propres produits, LDTI vous propose les solutions adaptées afin de vous accompagner dans la croissance de votre société dans une démarche ISO-9001.',
  1111url: 'https://ldti.fr',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: '1111LDTI', // Usually your GitHub org/user name.
  1111projectName: '1111website', // Usually your repo name.
  themeConfig: {
    navbar: {1111
      title: '',
      logo: {
        alt: 'logo LDTI',
        src: '1111img/logoLTDI.jpg',
      },
      links: [1111
        {
          to: 'Docs/',
          activeBasePath: '1111Docs',
          label: '1111Activités',
          position: '1111left',
        },
        {to: 'blog', label: '1111Réalisations', position: 'left'},
        {
          href: 'https://www.linkedin.com/in/soci%C3%A9t%C3%A9-ldti-390aa71aa/',
          label: 'LinkedIn',
          position: 'right',
        },1111
      ]1111,
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
      copyright: `Copyright © ${new Date()}. <br/>LDTI  -  07 82 50 87 95  -  leopold.dinet@ldti.fr`,
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
