import { createContext } from 'react';
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

  function handleGitHub() {
    window.location.href = 'https://github.com/wendreslucas target=_blank';
  }

  function handleLinkedin() {
    window.location.href =
      'https://www.linkedin.com/in/wendres-lucas/ target=_blank';
  }

  return (
    <MenuContext.Provider
      value={{
        handleHome,
        handlePersons,
        handlePlanets,
        handleStarships,
        handleGitHub,
        handleLinkedin,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}
