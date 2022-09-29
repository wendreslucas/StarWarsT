import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import geraDocumentTitle from '../utils/geraDocumentTitle';

export const MenuContext = createContext();

export function MenuContextProvider({ children }) {
  const navigate = useNavigate();

  function handleMovies() {
    navigate('/');
    geraDocumentTitle('Movie');
  }

  function handlePersons() {
    navigate('/characters');
    geraDocumentTitle('Characters');
  }

  function handlePlanets() {
    navigate('/planets');
    geraDocumentTitle('Planets');
  }

  function handleStarships() {
    navigate('/starships');
    geraDocumentTitle('Starships');
  }

  function handleVehicles() {
    navigate('/vehicles');
    geraDocumentTitle('Vehicles');
  }

  function handleGitHub() {
    window.open('https://github.com/wendreslucas', '_blank');
  }

  function handleLinkedin() {
    window.open('https://www.linkedin.com/in/wendres-lucas/', '_blank');
  }

  return (
    <MenuContext.Provider
      value={{
        handleMovies,
        handlePersons,
        handlePlanets,
        handleStarships,
        handleVehicles,
        handleGitHub,
        handleLinkedin,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}
