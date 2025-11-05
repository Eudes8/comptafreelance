import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-gray-800 py-4">
          <div className="flex items-center gap-4 text-text-dark dark:text-white">
            <div className="size-6 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">COMPTA FREELANCE</h2>
          </div>
          <nav className="hidden lg:flex flex-1 justify-center items-center gap-9">
            <NavLink to="/services" className={({ isActive }) => isActive ? "text-primary dark:text-primary text-sm font-bold leading-normal" : "text-text-dark dark:text-white text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary"}>Services</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-primary dark:text-primary text-sm font-bold leading-normal" : "text-text-dark dark:text-white text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary"}>À Propos</NavLink>
            <a href="#" className="text-text-dark dark:text-white text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary">Tarifs</a>
            <a href="#" className="text-text-dark dark:text-white text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary">Blog</a>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "text-primary dark:text-primary text-sm font-bold leading-normal" : "text-text-dark dark:text-white text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary"}>Contact</NavLink>
          </nav>
          <div className="flex items-center gap-4">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors">
              <span className="truncate">Demander un devis</span>
            </button>
            <button className="lg:hidden p-2 rounded-md text-text-dark dark:text-white">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
