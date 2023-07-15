import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './login';
import Registration from './registration';
import ProtectedPage from './ProtectedPage';

const App = () => {
  const isAuthenticated = !!localStorage.getItem('userInfo');

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route
          path="/table"
          element={isAuthenticated ? <ProtectedPage /> : <Navigate to="/login" replace={true} />}
        />
        <Route path="*" element={<Navigate to="/login" replace={true} />} />
      </Routes>
    </Router>
  );
};

export default App;
