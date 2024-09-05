// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="bg-dark text-white fixed-top">
      <div className="container d-flex justify-content-between align-items-center py-2">
        <div className="logo">
          <h1 className="mb-0 fs-4">Fytatitra.mg</h1> {/* Réduit la taille du texte */}
        </div>
        <nav>
          <ul className="nav mb-0">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white fs-6">{t('home')}</Link>
            </li>
            <li className="nav-item">
              <Link to="/organize" className="nav-link text-white fs-6">{t('organize')}</Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link text-white fs-6">{t('services')}</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-white fs-6">{t('about')}</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link text-white fs-6">{t('contact')}</Link>
            </li>
            <li className="nav-item">
              <Link to="/cooperative-dashboard" className="nav-link text-white fs-6">{t('cooperative')}</Link>
            </li>
          </ul>
        </nav>
        <div className="actions d-flex align-items-center">
          <Link to="/login" className="btn btn-primary d-flex align-items-center fs-6">
            <i className="fas fa-sign-in-alt mr-2"></i> {t('login')}
          </Link>
          <div className="lang d-flex ml-3">
            <button 
              onClick={() => handleLanguageChange('fr')} 
              className="btn btn-link text-white mx-1 fs-6"
              title="Français"
            >
              <i className="fas fa-flag-fr"></i>
            </button>
            <button 
              onClick={() => handleLanguageChange('en')} 
              className="btn btn-link text-white mx-1 fs-6"
              title="English"
            >
              <i className="fas fa-flag-us"></i>
            </button>
            <button 
              onClick={() => handleLanguageChange('mg')} 
              className="btn btn-link text-white mx-1 fs-6"
              title="Malagasy"
            >
              <i className="fas fa-flag-mg"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
