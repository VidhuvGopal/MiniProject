import React from 'react';
import { Table } from 'react-bootstrap';

const ProtectedPage = () => {
  // Retrieve user information from local storage
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  return (
    <div>
      <h2>Welcome, {userInfo?.name}!</h2>
      <Table striped bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </Table>
    </div>
  );
};

export default ProtectedPage;
