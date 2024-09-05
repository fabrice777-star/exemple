// src/pages/Organize.js
import React from 'react';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faHotel, faMapMarkedAlt, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

const Organize = () => {
  return (
    <>
      <Header />
      <div className="background">
        <main>
          <div className="container">
            <div className="hero text-center" style={{ padding: '100px 0', backgroundColor: '#007bff', color: 'white', marginBottom: '40px' }}>
              <h1>Organisez votre voyage</h1>
            </div>
            <section className="organize-section" style={{ padding: '60px 0', backgroundColor: '#f8f9fa' }}>
              <h2 className="text-center">Planifiez votre voyage</h2>
              <p className="text-center">Planifiez votre voyage avec nous en quelques étapes simples.</p>
              
              <div className="row justify-content-center">
                <div className="col-md-3 text-center mb-4 organize-card">
                  <FontAwesomeIcon icon={faPlane} size="3x" className="mb-3 organize-icon" />
                  <h4>Réservation de vol</h4>
                  <p>Trouvez et réservez les meilleurs vols pour votre destination.</p>
                </div>
                
                <div className="col-md-3 text-center mb-4 organize-card">
                  <FontAwesomeIcon icon={faHotel} size="3x" className="mb-3 organize-icon" />
                  <h4>Hébergement</h4>
                  <p>Réservez des hôtels confortables et abordables partout dans le monde.</p>
                </div>
                
                <div className="col-md-3 text-center mb-4 organize-card">
                  <FontAwesomeIcon icon={faMapMarkedAlt} size="3x" className="mb-3 organize-icon" />
                  <h4>Itinéraire</h4>
                  <p>Créez un itinéraire personnalisé pour maximiser votre voyage.</p>
                </div>
                
                <div className="col-md-3 text-center mb-4 organize-card">
                  <FontAwesomeIcon icon={faCalendarCheck} size="3x" className="mb-3 organize-icon" />
                  <h4>Gestion de planning</h4>
                  <p>Organisez votre voyage avec un planning précis et détaillé.</p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Organize;

// Ajout de styles CSS directement dans le composant
const style = document.createElement('style');
style.textContent = `
  .organize-card {
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
  }

  .organize-card:hover {
    transform: scale(1.05);
  }

  .organize-icon {
    color: #007bff; /* Couleur de l'icône */
    transition: color 0.3s ease-in-out;
  }

  .organize-card:hover .organize-icon {
    color: #0056b3; /* Couleur de l'icône au survol */
  }
`;
document.head.append(style);
