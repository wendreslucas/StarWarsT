import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout';
import Movie from '../../components/Characters/Movie';
import Character from '../../components/Characters/Character';
import Planet from '../../components/Characters/Planet';
import Starship from '../../components/Characters/Starship';
import Vehicle from '../../components/Characters/Vehicle';

export const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/movies" element={<Movie />} />
        <Route path="/characters" element={<Character />} />
        <Route path="/planets" element={<Planet />} />
        <Route path="/starships" element={<Starship />} />
        <Route path="/vehicles" element={<Vehicle />} />
      </Route>
    </Routes>
  );
};
