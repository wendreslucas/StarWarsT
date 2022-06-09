import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home';
import Personagens from '../Personagens';

export const Root = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/personagens" element={<Personagens />} />
    </Routes>
  );
};
