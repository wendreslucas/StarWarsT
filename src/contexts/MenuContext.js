import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const MenuContext = createContext();

export function MenuContextProvider({ children }) {
  const navigate = useNavigate();

  function handleMovies() {
    navigate('/');
  }

  function handlePersons() {
    navigate('/characters');
  }

  function handlePlanets() {
    navigate('/planets');
  }

  function handleStarships() {
    navigate('/starships');
  }

  function handleVehicles() {
    navigate('/vehicles');
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
