import Modal from '../../../../styles/Modal';
import useApi from './../../../../hooks/useApi';
import { useEffect } from 'react';

const CharacterModal = ({ characterId, onClickClose }) => {
  const [load, loadInfo] = useApi({
    url: `/people/${characterId}`,
    method: 'GET',
    params: {
      characterId,
    },
  });

  useEffect(() => {
    load();
  }, []);

  console.log(loadInfo);

  return (
    <Modal isOpen={Boolean(characterId)} onClickClose={onClickClose}>
      <h1>Detalhes</h1>
    </Modal>
  );
};

export default CharacterModal;
