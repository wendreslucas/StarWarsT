import { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const MenuContext = createContext();

export function MenuContextProvider({ children }) {
  const navigate = useNavigate();

  function handleHome() {
    navigate('/home');
  }

  function handlePersonagens() {
    navigate('/personagens');
  }

  function handlePlanetas() {
    navigate('/planetas');
  }

  function handleNaves() {
    navigate('/naves');
  }

  return (
    <MenuContext.Provider
      value={{
        handleHome,
        handlePersonagens,
        handlePlanetas,
        handleNaves,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}
