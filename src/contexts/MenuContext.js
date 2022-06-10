import { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const MenuContext = createContext();

export function MenuContextProvider({ children }) {
  const navigate = useNavigate();

  function handleHome() {
    navigate('/');
  }

  function handlePersons() {
    navigate('/persons');
  }

  function handlePlanets() {
    navigate('/planets');
  }

  function handleStarships() {
    navigate('/starships');
  }

  return (
    <MenuContext.Provider
      value={{
        handleHome,
        handlePersons,
        handlePlanets,
        handleStarships,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}
