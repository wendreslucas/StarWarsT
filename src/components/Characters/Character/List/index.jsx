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

const ListCharacters = ({ loading, characters }) => {
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
        <Container>
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
              <Icons>
                <Status>
                  <CommentIcon />
                </Status>
                <Status>
                  <RetweetIcon />
                </Status>
                <Status>
                  <LikeIcon />
                </Status>
              </Icons>
            </Content>
          </Body>
        </Container>
      ))}
    </div>
  );
};

export default ListCharacters;
