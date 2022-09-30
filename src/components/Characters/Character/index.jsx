import React, { useEffect, useState, useRef } from 'react';
import SearchInputComponent from '../../SearchInput';
import useApi from '../../../hooks/useApi';
import ListCharacters from './List/';
import InfinityScroll from '../../../utils/infinityScroll';

function Character() {
  const mountRef = useRef(null);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const [load, loadInfo] = useApi({
    debounceDelay: 300,
    url: `people/?search=${search}`,
    method: 'GET',
  });

  // console.log(loadInfo.data);

  useEffect(() => {
    load({
      debounced: mountRef.current,
      params: {
        name: search || undefined,
        next: 1,
      },
    });
    if (!mountRef.current) {
      mountRef.current = true;
    }
  }, [search]);

  function fetchMore() {
    const newPage = page + 1;
    load({
      params: {
        name: search || undefined,
        next: newPage,
      },
    });

    setPage(newPage);
  }

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
      {loadInfo.data && <InfinityScroll fetchMore={fetchMore} />}
    </>
  );
}

export default Character;
