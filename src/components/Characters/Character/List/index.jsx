import { useState } from 'react';
import { LoadingDiv } from './styles';
import { RiLoader2Line } from 'react-icons/ri';
import CharacterCard from '../Card';
import CharacterModal from '../Modal';

const ListCharacters = ({ loading, characters, error }) => {
  const [characterId, setCharacterId] = useState(null);

  if (error) {
    return <div>Algo de errado não está certo...</div>;
  }

  if (loading || characters === null) {
    return (
      <LoadingDiv>
        <RiLoader2Line />
      </LoadingDiv>
    );
  }

  if (characters.length === 0) {
    return <div>Nenhum resultado encontrado</div>;
  }

  return (
    <div>
      {characters.map((character) => (
        <CharacterCard
          character={character}
          onClickCard={() => setCharacterId(character.name)}
        />
      ))}
      <CharacterModal
        characterId={characterId}
        onClickClose={() => setCharacterId(null)}
      />
    </div>
  );
};

export default ListCharacters;
