// ReservationList.js
import React from 'react';

const ReservationList = ({ reservations }) => {
  return (
    <div className="mt-4">
      <h3>Liste des réservations</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Client</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation, index) => (
            <tr key={reservation.id}>
              <td>{index + 1}</td>
              <td>{reservation.clientName}</td>
              <td>{reservation.date}</td>
              <td>{reservation.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationList;
