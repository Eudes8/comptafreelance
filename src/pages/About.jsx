import React from 'react';
import { Link } from 'react-router-dom';
import ValueCard from '../components/ValueCard';

const AboutPage = () => {
  const values = [
    {
      icon: 'verified_user',
      title: 'Intègres',
      description: 'Nous agissons avec transparence et honnêteté. Votre confiance est notre priorité absolue.',
    },
    {
      icon: 'rule',
      title: 'Rigoureux',
      description: 'Chaque détail compte. Nous assurons une précision et une conformité irréprochables.',
    },
    {
      icon: 'thumb_up',
      title: 'Fiables',
      description: 'Nous respectons nos engagements et les délais pour vous offrir une tranquillité d\'esprit totale.',
    },
  ];

  return (
    <>
      <section className="bg-white dark:bg-background-dark/50 py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-8 text-center lg:text-left">
              <div className="flex flex-col gap-4">
                <h1 className="text-text-dark dark:text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tighter">Votre partenaire de confiance pour la comptabilité</h1>
                <p className="text-lg md:text-xl font-medium text-text-light dark:text-gray-300">Nous sommes plus qu'un cabinet comptable : nous sommes des alliés dédiés au succès des freelances et des petites entreprises.</p>
              </div>
            </div>
            <div className="w-full h-auto">
              <img alt="Illustration d'une équipe de comptables analysant des graphiques financiers" className="rounded-xl object-cover w-full h-full aspect-[4/3]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA464OIcTDfJGhABJK5TZNtYyK-84vk_0IgrpQ1GHhFKEWH5pE16wR37AVL7R9IPEeORGsZrpWVd-OHZ00uwJlB_KJi5BOnOqy2pK7_8QeBbpCAhf2pwtbzBvFWXSQSsr0xGXRD8mAD1KIRswsfRlJDz5ysy8Zx1Xd2CRhTem_8cEsCJWQqkcQaXB0NDnFEI9tVbnkLAGr43jSNsNxkSitA273cU-v6ISn9_TAhy82sl5z7K2h2jJ1eWPgr02EGdArdzKulALhRq-A" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-text-dark dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight">Nos Valeurs Fondamentales</h2>
            <p className="text-text-light dark:text-gray-300 mt-2 max-w-2xl mx-auto">Elles guident chacune de nos actions et garantissent un service d'excellence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ValueCard key={index} value={value} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white dark:bg-background-dark/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="w-full h-auto order-last lg:order-first">
              <img alt="Illustration d'une personne organisant des documents financiers importants" className="rounded-xl object-cover w-full h-full aspect-[4/3]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATRCyO5LwGIxeB6qc8LIYhoxKjl10ivEytvH8kLgF4gYWGaroDa8tPSNQZLzGr-mWk_5n51DTxuM0K89M8slHyScru5MfeA3fm7dBXEAJ7ajXamOzZLKz-uofGSs1qNLCPdgYcImitQ7d2dlU5Qh89ZDGAUniuwUad0QjysSLB4djoeZ0-6fF9FkJJivrFiATClRgxINIc94oh-2FLOiVkFhDyPJIw4TTAzFZOp1TuNUekspHJNkCsQEX8ufti1hxsDOd3oW0gCug" />
            </div>
            <div className="flex flex-col gap-6 text-center lg:text-left">
              <h2 className="text-text-dark dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight">Notre Mission : Simplifier votre quotidien d'entrepreneur</h2>
              <p className="text-text-light dark:text-gray-300 text-lg">Chez COMPTA FREELANCE, notre mission est de démystifier la comptabilité pour les freelances et les petites entreprises. Nous croyons que la gestion financière ne devrait pas être un obstacle à votre passion. C'est pourquoi nous avons développé des services sur-mesure qui vous permettent de vous concentrer sur votre cœur de métier, tout en ayant l'assurance que votre comptabilité est gérée avec expertise et précision.</p>
              <div className="flex justify-center lg:justify-start">
                <Link to="/services" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors">
                  <span className="truncate">Découvrir nos services</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 sm:py-24">
        <div className="bg-secondary/20 dark:bg-secondary/10 rounded-xl p-8 md:p-16 text-center">
          <h2 className="text-text-dark dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight">Rejoignez les entrepreneurs qui nous font confiance</h2>
          <p className="text-text-light dark:text-gray-300 mt-4 max-w-2xl mx-auto">Discutons de votre projet. Prenez contact avec notre équipe pour un conseil personnalisé et un devis gratuit.</p>
          <div className="mt-8">
            <Link to="/contact" className="flex mx-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors">
              <span className="truncate">Contactez-nous aujourd'hui</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
