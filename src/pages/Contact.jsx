import React from 'react';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <main className="flex-grow">
      <section className="container mx-auto px-4 py-16 sm:py-24">
        <div className="flex flex-col items-center text-center gap-4 mb-12 md:mb-16">
          <h1 className="text-text-dark dark:text-white text-4xl md:text-5xl font-bold leading-tight tracking-tighter">Contactez-nous</h1>
          <p className="text-lg md:text-xl font-medium text-text-light dark:text-gray-300 max-w-3xl">Une question ? Un projet ? N'hésitez pas à nous contacter. Notre équipe est là pour vous aider à simplifier votre comptabilité.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <ContactForm />
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-text-dark dark:text-white">Nos coordonnées</h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-3xl text-primary">mail</span>
                  <div>
                    <p className="font-bold text-text-dark dark:text-white">Email</p>
                    <a className="text-text-light dark:text-gray-300 hover:text-primary" href="mailto:contact@compta-freelance.fr">contact@compta-freelance.fr</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-3xl text-primary">call</span>
                  <div>
                    <p className="font-bold text-text-dark dark:text-white">Téléphone</p>
                    <a className="text-text-light dark:text-gray-300 hover:text-primary" href="tel:+33612345678">06 12 34 56 78</a><span className="text-text-light dark:text-gray-300"> / </span><a className="text-text-light dark:text-gray-300 hover:text-primary" href="tel:+33787654321">07 87 65 43 21</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-3xl text-primary">location_on</span>
                  <div>
                    <p className="font-bold text-text-dark dark:text-white">Adresse</p>
                    <p className="text-text-light dark:text-gray-300">123 Rue de la Liberté, 75001 Paris</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-auto">
              <img alt="Illustration de deux personnes discutant autour d'un bureau avec des graphiques" className="rounded-xl object-cover w-full h-full aspect-[4/3]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA464OIcTDfJGhABJK5TZNtYyK-84vk_0IgrpQ1GHhFKEWH5pE16wR37AVL7R9IPEeORGsZrpWVd-OHZ00uwJlB_KJi5BOnOqy2pK7_8QeBbpCAhf2pwtbzBvFWXSQSsr0xGXRD8mAD1KIRswsfRlJDz5ysy8Zx1Xd2CRhTem_8cEsCJWQqkcQaXB0NDnFEI9tVbnkLAGr43jSNsNxkSitA273cU-v6ISn9_TAhy82sl5z7K2h2jJ1eWPgr02EGdArdzKulALhRq-A" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
