import React from 'react';

const ContactForm = () => {
  return (
    <div className="w-full bg-white dark:bg-background-dark/50 p-8 rounded-xl border border-gray-200 dark:border-gray-800">
      <h2 className="text-2xl font-bold text-text-dark dark:text-white mb-6">Envoyez-nous un message</h2>
      <form className="grid grid-cols-1 gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-medium text-text-light dark:text-gray-300" htmlFor="first-name">Prénom</label>
            <input className="w-full mt-2 rounded-lg border-gray-300 dark:border-gray-700 dark:bg-background-dark/60 focus:border-primary focus:ring-primary/50" id="first-name" placeholder="Jean" type="text" />
          </div>
          <div>
            <label className="text-sm font-medium text-text-light dark:text-gray-300" htmlFor="last-name">Nom</label>
            <input className="w-full mt-2 rounded-lg border-gray-300 dark:border-gray-700 dark:bg-background-dark/60 focus:border-primary focus:ring-primary/50" id="last-name" placeholder="Dupont" type="text" />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-text-light dark:text-gray-300" htmlFor="email">Adresse e-mail</label>
          <input className="w-full mt-2 rounded-lg border-gray-300 dark:border-gray-700 dark:bg-background-dark/60 focus:border-primary focus:ring-primary/50" id="email" placeholder="jean.dupont@email.com" type="email" />
        </div>
        <div>
          <label className="text-sm font-medium text-text-light dark:text-gray-300" htmlFor="subject">Sujet</label>
          <input className="w-full mt-2 rounded-lg border-gray-300 dark:border-gray-700 dark:bg-background-dark/60 focus:border-primary focus:ring-primary/50" id="subject" placeholder="Demande de devis" type="text" />
        </div>
        <div>
          <label className="text-sm font-medium text-text-light dark:text-gray-300" htmlFor="message">Message</label>
          <textarea className="w-full mt-2 rounded-lg border-gray-300 dark:border-gray-700 dark:bg-background-dark/60 focus:border-primary focus:ring-primary/50" id="message" placeholder="Bonjour, j'aimerais en savoir plus sur vos services..." rows="5"></textarea>
        </div>
        <div>
          <button className="w-full flex min-w-[84px] max-w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors" type="submit">
            <span className="truncate">Envoyer le message</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
