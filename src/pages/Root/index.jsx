import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home';
import Characters from '../Characters';
import Planets from '../Planets';
import Starships from '../Starships';
import Vehicles from '../Vehicles';
import NotFound from './../NotFound/index';

export const Root = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/planets" element={<Planets />} />
      <Route path="/starships" element={<Starships />} />
      <Route path="vehicles" element={<Vehicles />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
