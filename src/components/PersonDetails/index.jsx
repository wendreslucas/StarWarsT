import React, { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { swapi } from '../../services/api';

import { useCharacter } from './../../hooks/useCharacter';
import { RiLoader2Line } from 'react-icons/ri';
import { Container, LoadingDiv, ListInfo } from './styles';

function CardDetails() {
  const [data, setData] = useState([]);
  const [persons, setPersons] = useState();
  const {
    movies,
    homeWorld,
    starships,
    vehicles,
    isLoading: isLoadingCharacter,
  } = useCharacter(data);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const getDetailsData = useCallback(async () => {
    try {
      const response = await swapi.get('/people/');
      const returnedData = await response.data;

      setPersons(returnedData.results);
    } catch {
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getDetailsData();
  }, [getDetailsData]);

  return (
    <Container>
      {isLoading ? (
        <LoadingDiv></LoadingDiv>
      ) : (
        <ListInfo>
          <p>{/* Planeta natal: <span>{homeWorld.name}</span> */}</p>

          <p>
            Nascimento: <span>{persons?.birth_year}</span>
          </p>

          <p>
            Gênero: <span>{persons?.gender}</span>
          </p>

          <p>
            Altura: <span>{persons?.height} cm</span>
          </p>

          <p>
            Peso: <span>{persons?.mass} kg</span>
          </p>

          <p>
            Cor da pele: <span>{persons?.skin_color}</span>
          </p>

          <p>
            Cor dos olhos: <span>{persons?.eye_color}</span>
          </p>

          <p>
            Cor do cabelo: <span>{persons?.hair_color}</span>
          </p>
        </ListInfo>
      )}
    </Container>
  );
}

export default CardDetails;
