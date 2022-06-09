import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home';

export const Root = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};
