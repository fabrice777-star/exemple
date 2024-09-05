// ClientList.js
import React from 'react';

const ClientList = ({ clients }) => {
  return (
    <div className="mt-4">
      <h3>Liste des clients</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Nom</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <tr key={client.id}>
              <td>{index + 1}</td>
              <td>{client.name}</td>
              <td>{client.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientList;
