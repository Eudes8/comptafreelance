import React from 'react';

const ServiceCard = ({ service }) => {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-background-light dark:bg-background-dark p-6 text-center items-center">
      <span className="material-symbols-outlined text-4xl text-primary">{service.icon}</span>
      <div className="flex flex-col gap-2">
        <h3 className="text-text-dark dark:text-white text-xl font-bold leading-tight">{service.title}</h3>
        <p className="text-text-light dark:text-gray-400 text-sm font-normal leading-normal">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
