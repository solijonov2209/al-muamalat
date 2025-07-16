// AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/HomePage/HomePage';
import { Contact } from './pages/Contact/Contact';
import { SignIn } from './pages/SignIn/SignIn';
import { Register } from './pages/Register/Register';
import { International } from './pages/Programs/International';
import { Specialized } from './pages/Programs/Specialized';
import { IslamicFinance } from './pages/Programs/IslamicFinance';
import { Certification } from './pages/Programs/Certification';
import { Finance } from './pages/Finance/Finance';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/register" element={<Register />} />
      <Route path="/finance-tools" element={<Finance />} />
      <Route path="/programs/international" element={<International />} />
      <Route path="/programs/specialized" element={<Specialized />} />
      <Route path="/programs/islamic-finance" element={<IslamicFinance />} />
      <Route path="/programs/certification" element={<Certification />} />
    </Routes>
  );
};

export default AppRoutes;
