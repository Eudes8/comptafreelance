import React from 'react';
import ServiceListItem from '../components/ServiceListItem';
import CallToAction from '../components/CallToAction';

const ServicesPage = () => {
  const services = [
    {
      icon: 'edit_document',
      title: 'Sous-traitance de la saisie comptable',
      description: 'Déléguez la saisie de vos pièces comptables (factures d\'achat, de vente, notes de frais, relevés bancaires) à nos experts. Nous garantissons une saisie rapide, précise et conforme aux normes en vigueur pour une comptabilité toujours à jour.',
      items: [
        'Gain de temps significatif',
        'Réduction des risques d\'erreurs',
        'Visibilité en temps réel sur votre activité',
      ],
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzX6E2BhsaakeWSOP0dvk1DekfG9wuEC0pdTJ5EmFc1JKXo25a42pGU0HuTcTFfHuAUoaEM_-sQGVGplZdvVpHCJ5TF69-LuvJPagzibEDCVz0ikK5ieolcrJf7k0dVFXGAsJdQmZKrs9OUvKnIfxpSSGr8xiuxegboL7gUxqydJ8DEZS4MPv4JVaiN_NjmF5qz9IS4x7wMYfKKnp0z9c9d3XXpTzR3Qg7XTdy75JSdP_9Zr1Y1xWQgG9bkT4e5PoD333mAVK-HsQ',
    },
    {
      icon: 'inventory_2',
      title: 'Gestion des stocks',
      description: 'Optimisez la gestion de vos stocks pour améliorer votre trésorerie et votre rentabilité. Nous vous aidons à mettre en place des outils et des processus pour un suivi précis des entrées, des sorties et des niveaux de stock.',
      items: [
        'Éviter les ruptures et le sur-stockage',
        'Valorisation comptable précise de vos stocks',
        'Meilleure planification des achats',
      ],
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOTve-PHiJk27VoAAOuMSirowowiLxRm9Jz6zqzli0bsHzzdeZCTMFaty9hzODtHCTiyR801G6VYjFdwjbKjsApr0oSos7uYhsiXxknqh3kh2JeR16fuG6KQtpX53lc_yWBhhANx1XTcFnnlDJQH5ryh8ZwXvBFlCHFA7vJinuyFf0vVRaAebkolD3ZkCbmSxZ1wDWLP4C6nF3RS1xE78GPQt1uD4cwwgMr9MuSglta9gsdb-vY_KluGhIkq0T3opY08_JieewfUM',
    },
    {
      icon: 'monitoring',
      title: 'Gestion budgétaire et prévisionnels',
      description: 'Pilotez votre activité avec sérénité grâce à des budgets et des prévisionnels financiers fiables. Nous vous accompagnons dans l\'élaboration de votre business plan, le suivi de vos performances et l\'analyse des écarts.',
      items: [
        'Anticipation des besoins de trésorerie',
        'Prise de décision éclairée',
        'Support pour les demandes de financement',
      ],
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_SfOanU88Fli2lVbUFObBGrUwqIOBcgB6BYRzbiaJgqvj2GCw-wckXiL6vV8IWXP_-FNXaPx9Uil_Ua-EvrcbBbnEeBu7VchueZ7NZBqw7ibgbyV0kIchaIVElSKcXo2O8pziFjMrsRhcqhcT7j3xVnaD-_3VuP_H2YNv9KJsj90QxX1_LTOlDpkPR13huKWVPuuzLPSYiO8LCVgbpRaHTO2973bKpBPffwbFWT_qaS6AEKTkHShUwy1leOHlbBlzTBVLDS4laPI',
    },
    {
      icon: 'receipt_long',
      title: 'Déclarations fiscales et sociales',
      description: 'Ne vous souciez plus des échéances. Nous prenons en charge l\'ensemble de vos déclarations (TVA, impôt sur le revenu, cotisations sociales...) pour vous garantir conformité et tranquillité d\'esprit.',
      items: [
        'Respect des délais et obligations légales',
        'Optimisation de votre charge fiscale',
        'Interlocuteur unique avec les administrations',
      ],
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBR-CyaIVrlDYpAYd_vnGffZ5JlMpOlh8fHV9wL2pMdxgsIlgM3gns9ohDjaKAhv6FqfCLXPbPf1hPDMF5NvBA8Fb4oaIZm_4bvhZN6kcLi8TiOjMHtt_1WEazkARoSXor8gxq77XEDHDLvMsclBV3HPlZZ-PdHy799K0w95nb-Gbxr3WJnrIrUunc-MitKuxDHM_75rFr9_oTL1n1j-EM7ecyqi1emSuglvD8dtSrKJTNtVcLLBPD2oF0IXWclsMGe6STbWdB6Lro',
    },
  ];

  return (
    <>
      <section className="bg-white dark:bg-background-dark/50 py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-text-dark dark:text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tighter">Nos services de comptabilité</h1>
            <p className="mt-4 text-lg md:text-xl font-medium text-text-light dark:text-gray-300">Des solutions sur-mesure pour freelances et petites entreprises. Simplifiez votre gestion et concentrez-vous sur votre croissance.</p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16 lg:space-y-24">
            {services.map((service, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={`flex flex-col gap-6 ${index % 2 !== 0 ? 'lg:order-last' : ''}`}>
                  <span className="material-symbols-outlined text-4xl text-primary">{service.icon}</span>
                  <div className="flex flex-col gap-4">
                    <h2 className="text-text-dark dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight">{service.title}</h2>
                    <p className="text-text-light dark:text-gray-300 text-base md:text-lg">{service.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <ServiceListItem key={itemIndex} item={item} />
                    ))}
                  </ul>
                </div>
                <div className="w-full h-auto">
                  <img alt={`Illustration for ${service.title}`} className="rounded-xl object-cover w-full h-full aspect-[4/3]" src={service.imageUrl} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default ServicesPage;
