import React from 'react';
import './Contact.css'; // Importation du fichier CSS pour les styles personnalisés

const Contact = () => {
  return (
    <main className="container my-5">
      <h2 className="text-center mb-4">Contact</h2>
      <section className="mb-5 text-center">
        <h3>Qui sommes-nous ?</h3>
        <p className="lead">
          Nous avons créé cette plateforme afin de vous aider à trouver la meilleure offre avec le bon prix, de gagner du temps et de bénéficier d'un service de qualité et garanti.
        </p>
      </section>

      <section className="row">
        <div className="col-12 col-md-4 mb-4">
          <div className="card shadow-sm h-100 contact-card">
            <div className="card-body">
              <h3 className="card-title"><i className="fas fa-link"></i> Liens utiles</h3>
              <ul className="list-unstyled mt-3">
                <li><a href="#" className="text-dark">Accueil</a></li>
                <li><a href="#" className="text-dark">À propos</a></li>
                <li><a href="#" className="text-dark">Réserver</a></li>
                <li><a href="#" className="text-dark">Conditions générales</a></li>
                <li><a href="#" className="text-dark">Mentions légales</a></li>
                <li><a href="#" className="text-dark">Politique de confidentialité</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 mb-4">
          <div className="card shadow-sm h-100 contact-card">
            <div className="card-body">
              <h3 className="card-title"><i className="fas fa-envelope"></i> Contact Info</h3>
              <ul className="list-unstyled mt-3">
                <li><i className="fas fa-envelope"></i> contact@itatitra.mg</li>
                <li><i className="fas fa-phone"></i> +261 34 08 586 49</li>
                <li><i className="fas fa-map-marker-alt"></i> Ambohitsoa, Antananarivo</li>
              </ul>
              <button className="btn btn-primary mt-3 w-100"><i className="fas fa-check"></i> Vérifier réservation</button>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 mb-4">
          <div className="card shadow-sm h-100 contact-card">
            <div className="card-body">
              <h3 className="card-title"><i className="fas fa-paper-plane"></i> Inscrivez-vous</h3>
              <p className="mt-3">Sur notre newsletter!</p>
              <form>
                <div className="form-group mb-3">
                  <input type="email" className="form-control" placeholder="Entrez votre e-mail" />
                </div>
                <button type="submit" className="btn btn-primary w-100"><i className="fas fa-paper-plane"></i> Envoyer</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
