import React from 'react';
import { Table } from 'react-bootstrap';

const ProtectedPage = () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  return (
    <div>
      <h2>Welcome, {userInfo?.name}!</h2>
      <Table striped bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>USRNAME</th>
            <th>DATE</th>
            <th>ROLE</th>
            <th>ROLE</th>
            <th>STATUS</th>
            <th>ACTION</th>
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
