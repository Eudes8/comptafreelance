import React from 'react';

const CallToAction = () => {
  return (
    <section className="container mx-auto px-4 py-16 sm:py-24">
      <div className="bg-primary/90 dark:bg-primary/70 rounded-xl p-8 md:p-16 text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight">Prêt à simplifier votre comptabilité ?</h2>
        <p className="text-white/80 mt-4 max-w-2xl mx-auto">Contactez-nous aujourd'hui pour un devis gratuit et découvrez comment nous pouvons vous aider à vous concentrer sur ce que vous faites de mieux.</p>
        <div className="mt-8">
          <button className="flex mx-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white dark:bg-background-dark text-primary dark:text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors">
            <span className="truncate">Contactez-nous aujourd'hui</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
