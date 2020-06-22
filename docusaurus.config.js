module.exports = {
  title: 'LDTI',
  tagline: 'Après 15 années passées en bureau d’études dans différents secteurs d’activités ( médical, ferroviaire, automobile, nucléaire, agronomie/environnement, amiante, machine spéciale ) et après avoir mis en place l’ISO 9001 intégralement jusqu’à la certification dans une société intégrant tous les corps de métier ( sous-traitant nucléaire), j’ai pu constater qu’il y avait des disfonctionnements dues en grande partie au dossier technique regroupant les données d’entrées de tous les services…',
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
