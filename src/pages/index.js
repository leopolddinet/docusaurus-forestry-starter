import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Conception et gestion de projets</>,
    imageUrl: 'img/logo-conception.jpg',
    description: (
      <>
       Nous réalisons à partir de votre cahier des charges les produits qu'il vous faut,
    nous vous apporterons tout au long du projet notre expertise 
    et une gestion de projet adequate à votre activité.
      </>
    ),
  },
  {
    title: <>Création de vos dossiers techniques</>,
    imageUrl: 'img/logo-dossier-technique.jpg',
    description: (
      <>
        Vous avez validé votre conception, votre produit, 
    nous proposons de vous crééer vos dossiers techniques 
    afin de vous liberer de cette tache parfois longue et fastidieuse.
      </>
    ),
  },
  {
    title: <>amelioration continue</>,
    imageUrl: 'img/logo-amelioration-continue.jpg',
    description: (
      <>
        Nous vous accompagnons tout au long du projet dans une demarche d'amelioration continue, 
    nous vous proposons de vous créer vos trames personnalisées et adaptées à votre besoin.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Bienvenu sur le site de ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
