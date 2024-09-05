// src/pages/Reserve.js
import React from 'react';
import Header from '../components/Header';

const Reserve = () => {
  return (
    <>
      <Header />
      <div className="background">
        <main>
          <div className="container">
            <div className="hero text-center" style={{ padding: '100px 0', backgroundColor: 'rgba(0, 0, 0, 0.6)', color: 'white', marginBottom: '40px' }}>
              <h1>Réservez votre voyage</h1>
            </div>
            <section className="organize" style={{ padding: '40px 0', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
              <h2>Réservation</h2>
              <p>Formulaire de réservation ici.</p>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Reserve;
