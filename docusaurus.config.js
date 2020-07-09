module.exports = {
  title: 'LDTI',
  tagline: 'Vous dirigez une MIC, TPE, PME ou plus grande entreprise industriel et votre activé demande à se développer, votre bureau d’études a trop de projets à gérer et n’arrive pas produire les dossiers techniques à temps ou vous n’avez pas de bureau d’étude et vous souhaitez fabriquer vos propres produits, LDTI vous propose les solutions adaptées afin de vous accompagner dans la croissance de votre société dans une démarche ISO-9001. Après 15 années passées en bureau d’études dans différents secteurs d’activité (médical, ferroviaire, automobile, nucléaire, agronomie/environnement, amiante, machine spéciale) et après avoir mis en place l’ISO 9001 intégralement jusqu’à la certification dans une société intégrant tous les corps de métier (sous-traitant nucléaire), j’ai pu constater qu’il y avait des dysfonctionnements dus en grande partie au dossier technique regroupant les données d’entrée de tous les services… J’ai décidé de créer mon activité afin de mettre mon expérience au profit du plus grand nombre d’entreprises désirant entrer dans une démarche d’amélioration continue en vue d’une augmentation du nombre de salariés et/ou du chiffre d’affaires.',
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
