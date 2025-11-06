import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-background-dark/50 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="size-6 text-primary">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path></svg>
              </div>
              <h2 className="text-text-dark dark:text-white text-lg font-bold">COMPTA FREELANCE</h2>
            </div>
            <p className="text-text-light dark:text-gray-400 mt-4 text-sm">La comptabilité simplifiée pour les indépendants et petites entreprises.</p>
          </div>
          <div className="col-span-1">
            <h4 className="font-bold text-text-dark dark:text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link className="text-sm text-text-light dark:text-gray-400 hover:text-primary" to="/services">Services</Link></li>
              <li><Link className="text-sm text-text-light dark:text-gray-400 hover:text-primary" to="/about">À Propos</Link></li>
              <li><a className="text-sm text-text-light dark:text-gray-400 hover:text-primary" href="#">Tarifs</a></li>
              <li><Link className="text-sm text-text-light dark:text-gray-400 hover:text-primary" to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="font-bold text-text-dark dark:text-white mb-4">Légal</h4>
            <ul className="space-y-2">
              <li><a className="text-sm text-text-light dark:text-gray-400 hover:text-primary" href="#">Mentions Légales</a></li>
              <li><a className="text-sm text-text-light dark:text-gray-400 hover:text-primary" href="#">Politique de confidentialité</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="font-bold text-text-dark dark:text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-text-light dark:text-gray-400">
              <li>contact@comptafreelance.fr</li>
              <li>+33 1 23 45 67 89</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-text-light dark:text-gray-500">
          <p>© 2024 COMPTA FREELANCE. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
