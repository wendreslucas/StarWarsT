import React, { useEffect, useCallback, useState } from 'react';
import { swapi } from '../../services/api';

import { Container } from './styles';
import Film from '../Film';

function MovieList() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    swapi.get('/films').then(({ data }) => {
      setFilms(data.results);
      console.log(films);
    });
  }, []);

  return (
    <div>
      {films?.map((film, index) => (
        <Film
          key={film.index}
          id={film.index}
          title={film.title}
          director={film.director}
          release_date={film.release_date}
          opening_crawl={film.opening_crawl}
        />
      ))}
    </div>
  );
}

export default MovieList;
