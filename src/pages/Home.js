// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Home.css'; // Importer un fichier CSS pour les styles

const Home = () => {
  return (
    <>
      <Header />
      <div className="background-container">
        <main>
          <div className="container">
            <div className="hero text-center">
              <h2>RAPIDE, ABORDABLE, GARANTIE !</h2>
              <h1>Trouvez la meilleure offre</h1>
              <a href="#" className="btn btn-primary"><i className="fas fa-check"></i> Vérifier réservation</a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
