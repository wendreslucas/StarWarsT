import React, { useEffect, useState } from 'react';
import { swapi } from '../../../services/api';

import SearchInputComponent from '../../SearchInput';
import useApi from '../../../hooks/useApi';
import ListCharacters from './List/';

function Character() {
  const [search, setSearch] = useState('');
  const [load, loadInfo] = useApi({
    url: `https://swapi.dev/api/people/?search=${search}`,
    method: 'GET',
    params: {
      name: search || undefined,
    },
  });

  // console.log(loadInfo.data);

  useEffect(() => {
    load();
  }, [search]);

  return (
    <>
      <SearchInputComponent
        type="search"
        placeholder="Buscar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ListCharacters characters={loadInfo.data} loading={loadInfo.loading} />
    </>
  );
}

export default Character;
