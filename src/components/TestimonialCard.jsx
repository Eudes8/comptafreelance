import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="flex flex-col justify-between gap-4 rounded-xl bg-background-light dark:bg-background-dark p-6 border border-gray-200 dark:border-gray-800">
      <p className="text-text-light dark:text-gray-300 italic">"{testimonial.quote}"</p>
      <div className="flex items-center gap-4 mt-4">
        <img alt={testimonial.author.name} className="w-12 h-12 rounded-full object-cover" src={testimonial.author.avatarUrl} />
        <div>
          <p className="font-bold text-text-dark dark:text-white">{testimonial.author.name}</p>
          <p className="text-sm text-text-light dark:text-gray-400">{testimonial.author.title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
