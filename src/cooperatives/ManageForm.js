// ManageForm.js
import React, { useState } from 'react';

const ManageForm = ({ onSubmit }) => {
  const [clientName, setClientName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ clientName, email, date, status });
    setClientName('');
    setEmail('');
    setDate('');
    setStatus('');
  };

  return (
    <div className="mt-4">
      <h3>Ajouter une réservation</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nom du client</label>
          <input
            type="text"
            className="form-control"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Date de réservation</label>
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Status</label>
          <select
            className="form-control"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="">Sélectionnez le statut</option>
            <option value="Confirmed">Confirmée</option>
            <option value="Pending">En attente</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary mt-3">Soumettre</button>
      </form>
    </div>
  );
};

export default ManageForm;
