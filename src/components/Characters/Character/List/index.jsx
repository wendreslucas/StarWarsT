import { useState } from 'react';
import {
  Container,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  LoadingDiv,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
  CardInfo,
  ListInfo,
} from './styles';
import { RiLoader2Line } from 'react-icons/ri';
import { getUrlId } from '../../../../utils/getUrlId';
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
        <Container onClickContent={() => setCharacterId(character.id)}>
          <Body>
            <Content>
              <Avatar
                id={character.id}
                src={`https://starwars-visualguide.com/assets/img/characters/${getUrlId(
                  character.url
                )}.jpg`}
              />
              <Header>
                <strong>{character.name}</strong>
                <Dot />
              </Header>
              <CardInfo>
                <Description>
                  <ImageContent
                    src={`https://starwars-visualguide.com/assets/img/characters/${getUrlId(
                      character.url
                    )}.jpg`}
                  />
                </Description>
                <ListInfo>
                  <p>
                    Nascimento: <span>{character.birth_year}</span>
                  </p>

                  <p>
                    Gênero: <span>{character.gender}</span>
                  </p>

                  <p>
                    Altura: <span>{character.height} cm</span>
                  </p>

                  <p>
                    Peso: <span>{character.mass} kg</span>
                  </p>

                  <p>
                    Cor da pele: <span>{character.skin_color}</span>
                  </p>

                  <p>
                    Cor dos olhos: <span>{character.eye_color}</span>
                  </p>

                  <p>
                    Cor do cabelo: <span>{character.hair_color}</span>
                  </p>
                </ListInfo>
              </CardInfo>
              {/* <Icons>
                <Status>
                  <CommentIcon />
                </Status>
                <Status>
                  <RetweetIcon />
                </Status>
                <Status>
                  <LikeIcon />
                </Status>
              </Icons> */}
            </Content>
          </Body>
        </Container>
      ))}
      <Modal isOpen={Boolean(characterId)}>
        <h1>Detalhes</h1>
      </Modal>
    </div>
  );
};

export default ListCharacters;
