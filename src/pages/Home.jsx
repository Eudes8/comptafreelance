import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import FeatureListItem from '../components/FeatureListItem';
import TestimonialCard from '../components/TestimonialCard';
import CallToAction from '../components/CallToAction';

const HomePage = () => {
  const services = [
    {
      icon: 'account_balance_wallet',
      title: 'Gestion Comptable',
      description: 'Nous nous occupons de votre tenue de livres pour que vous puissiez vous concentrer sur votre activité.',
    },
    {
      icon: 'receipt_long',
      title: 'Déclarations Fiscales',
      description: 'Optimisez vos impôts et assurez-vous que toutes vos déclarations sont conformes et ponctuelles.',
    },
    {
      icon: 'business_center',
      title: 'Création d\'Entreprise',
      description: 'Lancez votre activité en toute sérénité avec notre accompagnement personnalisé et nos conseils avisés.',
    },
  ];

  const features = [
    {
      icon: 'timer',
      title: 'Gagnez du temps',
      description: 'Automatisez vos tâches financières et consacrez plus de temps à ce qui compte vraiment.',
    },
    {
      icon: 'groups',
      title: 'Expertise dédiée',
      description: 'Bénéficiez des conseils de spécialistes de la comptabilité pour freelances.',
    },
    {
      icon: 'verified_user',
      title: 'Tranquillité d\'esprit',
      description: 'Ne vous souciez plus des échéances fiscales et des documents administratifs.',
    },
  ];

  const testimonials = [
    {
      quote: "COMPTA FREELANCE a transformé ma gestion administrative. Leur équipe est réactive, professionnelle et toujours de bon conseil. Je ne peux que recommander !",
      author: {
        name: 'Jean Dupont',
        title: 'Développeur Web',
        avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmnJJ2Sb-cVWAjjmZSc44qoPTXA6NQhe3Mt1B8U_7E5Ge22xyFS3hzTqS82zJKuRnTJuy-zvcbncV8z3kX0yjXh2Bjy_fuhHmp5qpX8v79mGXvqagzHPT_9HCm3cnZ84aOPs9s7Rh5P1EFLiJy-4OUeX1fanN9biTcwDOxHIldZp1eG8uO-0swev-3g8qM0sMxwuKRBG63l8V3F-lUdAoxyhpexuNbzJ56Zr_PGyoFYX2LV-67A5V_FxIuoEbmPQq58QwpWaXORDE',
      },
    },
    {
      quote: "Enfin un service comptable qui comprend les problématiques des freelances. Simple, efficace et un gain de temps incroyable chaque mois.",
      author: {
        name: 'Marie Leroy',
        title: 'Graphiste Indépendante',
        avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAd4KQ7ttpON1TmmIIeh-pf7m1fX89q4d2dOgWDi8MaqNy72qzg9bm82ucBNzF8ApulJR41pUqH5dhZPE3JCspfo351lBNrxkItQQI85h6X6-6304Pmvl2e6mIte8DiwfuYV4En_KlZKqkpKllPGYLZyIH-AJ94_-l_n7xEFI9sW5bVw957POrCILRFOoiZOXvT_I0eZVEiTZaSQIylSHePBhDQbmpmJjYkKCL8TugvgshC6mWlzMQZeQcfx0CAzr11CLwW-aOfVjI',
      },
    },
    {
      quote: "Le passage à COMPTA FREELANCE a été la meilleure décision pour mon activité. Je suis plus sereine et je peux me concentrer sur mes clients.",
      author: {
        name: 'Paul Martin',
        title: 'Consultant Marketing',
        avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDhqiFy3DV8w99phPfYSgvvxH6-xDuP6g6YsMHTVe9fy8l7FQE8XmsaElSG3NLe1h4dcLTlHgmHYqfeu3xYBI4EH2yuFbo5rHilenc2NxSQzpbgsTRv7znfGz79sGyPbrl0AZNoFNZTpNMzvrXszdISR-df_s9GClkBUtruWWf-wy378m5lIJzIAir0wmvH2jAkgxg9H_OLIyTAtsRFPjO81l7MVQlz9nScWtPk0efJa8Hhv1qOMn5cGu6YCV7xi_c6lMrJbmbZug',
      },
    },
  ];

  return (
    <>
      <section className="container mx-auto px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8 text-center lg:text-left">
            <div className="flex flex-col gap-4">
              <h1 className="text-text-dark dark:text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tighter">Simplifiez votre comptabilité freelance</h1>
              <p className="text-lg md:text-xl font-medium text-text-light dark:text-gray-300">Gérez vos finances efficacement. Nous vous aidons à gagner du temps, maximiser vos revenus et éviter le stress administratif.</p>
            </div>
            <div className="flex justify-center lg:justify-start">
              <Link to="/services" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors">
                <span className="truncate">Découvrir nos services</span>
              </Link>
            </div>
          </div>
          <div className="w-full h-auto">
            <img alt="Personne travaillant sur un ordinateur portable avec des graphiques financiers et une calculatrice" className="rounded-xl object-cover w-full h-full aspect-[4/3]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATRCyO5LwGIxeB6qc8LIYhoxKjl10ivEytvH8kLgF4gYWGaroDa8tPSNQZLzGr-mWk_5n51DTxuM0K89M8slHyScru5MfeA3fm7dBXEAJ7ajXamOzZLKz-uofGSs1qNLCPdgYcImitQ7d2dlU5Qh89ZDGAUniuwUad0QjysSLB4djoeZ0-6fF9FkJJivrFiATClRgxINIc94oh-2FLOiVkFhDyPJIw4TTAzFZOp1TuNUekspHJNkCsQEX8ufti1hxsDOd3oW0gCug" />
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-background-dark/50 py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-text-dark dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight">Nos Services</h2>
            <p className="text-text-light dark:text-gray-300 mt-2 max-w-2xl mx-auto">Des solutions complètes pour vous libérer des contraintes administratives.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="w-full h-auto order-last lg:order-first">
            <img alt="Équipe professionnelle collaborant dans un bureau moderne" className="rounded-xl object-cover w-full h-full aspect-square lg:aspect-[4/3]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA464OIcTDfJGhABJK5TZNtYyK-84vk_0IgrpQ1GHhFKEWH5pE16wR37AVL7R9IPEeORGsZrpWVd-OHZ00uwJlB_KJi5BOnOqy2pK7_8QeBbpCAhf2pwtbzBvFWXSQSsr0xGXRD8mAD1KIRswsfRlJDz5ysy8Zx1Xd2CRhTem_8cEsCJWQqkcQaXB0NDnFEI9tVbnkLAGr43jSNsNxkSitA273cU-v6ISn9_TAhy82sl5z7K2h2jJ1eWPgr02EGdArdzKulALhRq-A" />
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h2 className="text-text-dark dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight">Pourquoi choisir COMPTA FREELANCE ?</h2>
              <p className="text-text-light dark:text-gray-300">Nous nous engageons à fournir une expertise comptable claire et efficace, vous laissant la tranquillité d'esprit pour développer votre entreprise.</p>
            </div>
            <div className="flex flex-col gap-6">
              {features.map((feature, index) => (
                <FeatureListItem key={index} feature={feature} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/20 dark:bg-background-dark/50 py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-text-dark dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight">Ce que disent nos clients</h2>
            <p className="text-text-light dark:text-gray-300 mt-2">La confiance et la satisfaction de nos clients sont notre meilleure récompense.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default HomePage;
