// src/pages/Services.js
import React from 'react';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faHotel, faCar, faMapMarkedAlt, faConciergeBell } from '@fortawesome/free-solid-svg-icons';

const Services = () => {

  const handleClick = (service) => {
    alert(`Vous avez cliqué sur ${service}`);
  };

  return (
    <>
      <Header />
      <div className="background">
        <main>
          <div className="container">
            <div className="hero text-center" style={{ padding: '100px 0', backgroundColor: '#007bff', color: 'white', marginBottom: '40px' }}>
              <h1>Nos Services</h1>
            </div>
            <section className="services-section" style={{ padding: '60px 0', backgroundColor: '#f8f9fa' }}>
              <h2 className="text-center">Services Disponibles</h2>
              <p className="text-center">Explorez les services proposés par nos coopératives pour faciliter votre voyage.</p>
              
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 text-center mb-4 service-card" onClick={() => handleClick('Réservation de Transports')}>
                  <FontAwesomeIcon icon={faPlane} size="3x" className="mb-3 service-icon" />
                  <h4>Réservation de Transports</h4>
                  <p>Réservez des moyens de transport adaptés à vos besoins, que ce soit pour des trajets locaux ou nationaux.</p>
                </div>
                
                <div className="col-lg-4 col-md-6 text-center mb-4 service-card" onClick={() => handleClick('Réservation d\'Hébergements')}>
                  <FontAwesomeIcon icon={faHotel} size="3x" className="mb-3 service-icon" />
                  <h4>Réservation d'Hébergements</h4>
                  <p>Trouvez et réservez des hébergements partenaires offrant confort et qualité dans chaque région.</p>
                </div>
                
                <div className="col-lg-4 col-md-6 text-center mb-4 service-card" onClick={() => handleClick('Location de Véhicules')}>
                  <FontAwesomeIcon icon={faCar} size="3x" className="mb-3 service-icon" />
                  <h4>Location de Véhicules</h4>
                  <p>Louez des véhicules pour vos déplacements personnels ou professionnels en toute flexibilité.</p>
                </div>
                
                <div className="col-lg-4 col-md-6 text-center mb-4 service-card" onClick={() => handleClick('Guides Touristiques')}>
                  <FontAwesomeIcon icon={faMapMarkedAlt} size="3x" className="mb-3 service-icon" />
                  <h4>Guides Touristiques</h4>
                  <p>Accédez à des guides locaux pour découvrir les meilleures attractions et expériences culturelles.</p>
                </div>
                
                <div className="col-lg-4 col-md-6 text-center mb-4 service-card" onClick={() => handleClick('Service de Conciergerie')}>
                  <FontAwesomeIcon icon={faConciergeBell} size="3x" className="mb-3 service-icon" />
                  <h4>Service de Conciergerie</h4>
                  <p>Profitez d'un service personnalisé pour vous assister durant votre séjour avec nos coopératives.</p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Services;

// Ajout de styles CSS directement dans le composant
const style = document.createElement('style');
style.textContent = `
  .service-card {
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
  }

  .service-card:hover {
    transform: scale(1.05);
  }

  .service-icon {
    color: #007bff; /* Couleur de l'icône */
    transition: color 0.3s ease-in-out;
  }

  .service-card:hover .service-icon {
    color: #0056b3; /* Couleur de l'icône au survol */
  }
`;
document.head.append(style);
