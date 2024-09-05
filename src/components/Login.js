import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation de l'authentification (simulation)
    if (email === 'test@exemple.com' && password === 'password') {
      navigate('/dashboard');
    } else {
      alert('Email ou mot de passe incorrect');
    }
  };

  const handleSignupRedirect = () => {
    navigate('/signup'); // Redirige vers la page de création de compte
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Connexion</h2>
        <div className="input-group">
          <label>Email</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>
        <div className="input-group">
          <label>Mot de passe</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>
        <button type="submit">Se connecter</button>

        {/* Ajouter un bouton pour rediriger vers la page de création de compte */}
        <div className="signup-redirect">
          <p>Pas de compte ?</p>
          <button type="button" onClick={handleSignupRedirect}>Créer un compte</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
