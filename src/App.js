// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Home from './pages/Home';
import Organize from './pages/Organize';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import CooperativeDashboard from './cooperatives/CooperativeDashboard';
import ClientList from './cooperatives/ClientList';
import ManageForm from './cooperatives/ManageForm';
import ReservationList from './cooperatives/ReservationList';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Page d'accueil */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        
        {/* Autres pages */}
        <Route path="/organize" element={<Organize />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        {/* Espace coopérative */}
        <Route path="/cooperative-dashboard" element={<CooperativeDashboard />} />
        <Route path="/clients" element={<ClientList />} />
        <Route path="/reservations" element={<ReservationList />} />
        <Route path="/manage-form" element={<ManageForm />} />
      </Routes>
    </Router>
  );
}

export default App;
