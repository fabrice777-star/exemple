// CooperativeDashboard.js (Mise à jour)
import React, { useState, useEffect } from 'react';
import ClientList from './ClientList';
import ReservationList from './ReservationList';
import ManageForm from './ManageForm';

const CooperativeDashboard = () => {
  const [clients, setClients] = useState([]);
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    setClients([
      { id: 1, name: 'Client A', email: 'clienta@example.com' },
      { id: 2, name: 'Client B', email: 'clientb@example.com' },
    ]);
    setReservations([
      { id: 1, clientName: 'Client A', date: '2024-09-10', status: 'Confirmed' },
      { id: 2, clientName: 'Client B', date: '2024-09-12', status: 'Pending' },
    ]);
  }, []);

  const handleNewReservation = (reservation) => {
    setReservations([...reservations, reservation]);
  };

  return (
    <div className="container mt-5">
      <h2>Tableau de bord - Coopérative</h2>
      <ClientList clients={clients} />
      <ReservationList reservations={reservations} />
      <ManageForm onSubmit={handleNewReservation} />
    </div>
  );
};

export default CooperativeDashboard;
