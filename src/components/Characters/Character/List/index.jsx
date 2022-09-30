import { useState } from 'react';
import { LoadingDiv } from './styles';
import { RiLoader2Line } from 'react-icons/ri';
import CharacterCard from '../Card';
import Modal from '../../../../styles/Modal';

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
      <Modal
        isOpen={Boolean(characterId)}
        onClickClose={() => setCharacterId(null)}
      >
        <h1>Detalhes</h1>
      </Modal>
    </div>
  );
};

export default ListCharacters;
