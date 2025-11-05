import React from 'react';

const FeatureListItem = ({ feature }) => {
  return (
    <div className="flex items-start gap-4">
      <span className="material-symbols-outlined text-2xl text-primary mt-1">{feature.icon}</span>
      <div>
        <h4 className="text-text-dark dark:text-white text-lg font-bold">{feature.title}</h4>
        <p className="text-text-light dark:text-gray-400 text-sm">{feature.description}</p>
      </div>
    </div>
  );
};

export default FeatureListItem;
