// src/pages/About.js
import React from 'react';
import Header from '../components/Header';

const About = () => {
  return (
    <>
      <Header />
      <div className="background">
        <main>
          <div className="container">
            <div className="hero text-center" style={{ padding: '100px 0', backgroundColor: '#007bff', color: 'white', marginBottom: '40px' }}>
              <h1>À propos de nous</h1>
            </div>
            <section className="about-section" style={{ padding: '60px 0', backgroundColor: '#f8f9fa' }}>
              <h2>Notre Histoire</h2>
              <p>
                itatitra.mg est votre partenaire de confiance pour la gestion de voyages. Nous nous engageons à offrir des services de qualité supérieure, adaptés à vos besoins spécifiques.
              </p>
              <p>
                Notre équipe est composée de professionnels expérimentés, passionnés par le voyage et dévoués à rendre votre expérience aussi agréable et fluide que possible.
              </p>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default About;
