import { useCallback, useEffect, useState } from 'react';

export function useCharacter(data) {
  const [movies, setMovies] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [starships, setStarships] = useState([]);
  const [homeworld, setHomeWorld] = useState({
    name: '',
    url: '',
  });
  const [isLoading, setIsLoading] = useState(true);

  const getMovies = useCallback(async () => {
    try {
      data?.movies.forEach(async (movie) => {
        const response = await fetch(movie);
        const movieData = await response.json();
        setMovies((prevState) => {
          if (prevState.includes(movieData.title)) return prevState;
          return [
            ...prevState,
            {
              title: movieData.title,
              url: movieData.url,
            },
          ];
        });
      });
    } catch {
    } finally {
      setIsLoading(false);
    }
  }, [data?.movies]);

  const getVehicles = useCallback(async () => {
    try {
      data?.vehicles.forEach(async (vehicle) => {
        const response = await fetch(vehicle);
        const vehicleData = await response.json();
        setVehicles((prevState) => {
          if (prevState.includes(vehicleData.name)) return prevState;
          return [
            ...prevState,
            {
              name: vehicleData.name,
              url: vehicleData.url,
            },
          ];
        });
      });
    } catch {
    } finally {
      setIsLoading(false);
    }
  }, [data?.vehicles]);

  const getStarships = useCallback(async () => {
    try {
      data?.starships.forEach(async (starship) => {
        const response = await fetch(starship);
        const starshipData = await response.json();

        setStarships((prevState) => {
          if (prevState.includes(starshipData.name)) return prevState;
          return [
            ...prevState,
            {
              name: starshipData.name,
              url: starshipData.url,
            },
          ];
        });
      });
    } catch {
    } finally {
      setIsLoading(false);
    }
  }, [data?.starships]);

  const getHomeWorld = useCallback(() => {
    try {
      if (!data?.homeworld) return;
      const response = fetch(data.homeworld);
      const homeWorldData = response.json();
      setHomeWorld({
        name: homeWorldData.name,
        url: homeWorldData.url,
      });
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }, [data?.homeworld]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  useEffect(() => {
    getVehicles();
  }, [getVehicles]);

  useEffect(() => {
    getStarships();
  }, [getStarships]);

  useEffect(() => {
    getHomeWorld();
  }, [getHomeWorld]);

  return {
    movies,
    vehicles,
    starships,
    homeworld,
    isLoading,
  };
}
