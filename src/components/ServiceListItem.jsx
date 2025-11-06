import React from 'react';

const ServiceListItem = ({ item }) => {
  return (
    <li className="flex items-start gap-3">
      <span className="material-symbols-outlined text-xl text-primary mt-1">check_circle</span>
      <span className="text-text-light dark:text-gray-400">{item}</span>
    </li>
  );
};

export default ServiceListItem;
