import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home';
import Persons from '../Persons';
import Planets from '../Planets';
import Starships from '../Starships';
import NotFound from './../NotFound/index';

export const Root = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/persons" element={<Persons />} />
      <Route path="/planets" element={<Planets />} />
      <Route path="/starships" element={<Starships />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
