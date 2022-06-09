import React, { useEffect, useState } from 'react';
import { swapi } from '../../services/api';

// import { Container } from './styles';

function Teste() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    swapi.get('/films').then((response) => {
      setMovies(response.data.results);

      console.log(movies);
    });
  }, []);

  return (
    <>
      {movies?.map((movie, index) => (
        <div key={movie.index}>
          <h1>{movie.title}</h1>
          <p>{movie.director}</p>
          <p>{movie.release_date}</p>
          <p>{movie.opening_crawl}</p>
        </div>
      ))}
      )
    </>
  );
}

export default Teste;
