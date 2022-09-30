import React, { useEffect, useState, useRef } from 'react';
import SearchInputComponent from '../../SearchInput';
import useApi from '../../../hooks/useApi';
import ListCharacters from './List/';

function Character() {
  const mountRef = useRef(null);
  const [search, setSearch] = useState('');
  const [load, loadInfo] = useApi({
    debounceDelay: 300,
    url: `people/?search=${search}`,
    method: 'GET',
    params: {
      name: search || undefined,
    },
  });

  // console.log(loadInfo.data);

  useEffect(() => {
    load({
      debounced: mountRef.current,
    });
    if (!mountRef.current) {
      mountRef.current = true;
    }
  }, [search]);

  return (
    <>
      <SearchInputComponent
        type="search"
        placeholder="Buscar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ListCharacters
        characters={loadInfo.data}
        error={loadInfo.error}
        loading={loadInfo.loading}
      />
    </>
  );
}

export default Character;
