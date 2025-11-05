import React from 'react';

const ValueCard = ({ value }) => {
  return (
    <div className="flex flex-col gap-4 items-center text-center p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark/50">
      <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full">
        <span className="material-symbols-outlined text-4xl text-primary">{value.icon}</span>
      </div>
      <h3 className="text-xl font-bold text-text-dark dark:text-white">{value.title}</h3>
      <p className="text-sm text-text-light dark:text-gray-400">{value.description}</p>
    </div>
  );
};

export default ValueCard;
