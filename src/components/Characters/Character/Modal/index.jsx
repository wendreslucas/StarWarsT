import Modal from '../../../../styles/Modal';

const CharacterModal = ({ characterId, onClickClose }) => {
  return (
    <Modal isOpen={Boolean(characterId)} onClickClose={onClickClose}>
      <h1>Detalhes</h1>
    </Modal>
  );
};

export default CharacterModal;
