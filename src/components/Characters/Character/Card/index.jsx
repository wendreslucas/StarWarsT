import {
  Container,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
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
import { getUrlId } from '../../../../utils/getUrlId';

const CharacterCard = ({ character, onClickCard }) => {
  return (
    <Container onClick={onClickCard}>
      <Body>
        <Content>
          <Avatar
            id={character}
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
  );
};

export default CharacterCard;
