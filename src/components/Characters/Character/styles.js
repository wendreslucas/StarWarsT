import styled, { css } from 'styled-components';
import { Chat, Retweet, Favorite } from '../../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 16px;
  border-bottom: 1px solid var(--outline);
  max-width: 100%;
`;

export const Retweeted = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: var(--gray);
`;

export const Body = styled.div`
  display: flex;
  margin-top: 3px;
  position: relative;
`;

export const Avatar = styled.img`
  width: 49px;
  height: 49px;
  border-radius: 50%;
  flex-shrink: 0;
  background: var(--gray);
  position: absolute;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2px;
  padding-left: 59px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  white-space: nowrap;

  > strong {
    margin-right: 5px;
  }
`;

export const Dot = styled.div`
  background: var(--gray);
  width: 2px;
  height: 2px;
  margin: 0 10px;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const Description = styled.p`
  font-size: 14px;
  margin-top: 4px;
`;

export const ImageContent = styled.img`
  margin-top: 12px;
  width: 100%;
  align-self: center;
  height: min(285px, max(175px, 41vw));
  background: var(--outline);
  border-radius: 14px;
  cursor: pointer;
  transition: ease-in-out 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 11px auto 0;
  width: 100%;

  @media (min-width: 330px) {
    width: 63%;
  }

  > div {
    cursor: pointer;
    transition: ease-in-out 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
`;
export const Status = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;

  > svg {
    margin-right: 5px;
  }

  &:nth-child(1) {
    &,
    > svg path {
      color: var(--gray);
    }
  }

  &:nth-child(2) {
    color: var(--retweet);

    > svg path {
      color: var(--retweet);
    }
  }

  &:nth-child(3) {
    color: var(--like);

    > svg path {
      color: var(--like);
    }
  }
`;

const iconCss = css`
  width: 19px;
  height: 19px;
`;

export const CommentIcon = styled(Chat)`
  ${iconCss}
`;
export const RetweetIcon = styled(Retweet)`
  ${iconCss}
`;
export const LikeIcon = styled(Favorite)`
  ${iconCss}
`;

export const LoadingDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const List = styled.ul`
  padding-left: 10px;
  display: flex;
  width: 90%;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-top: 3px;
  align-items: center;
`;

export const ListInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 20px;

  > p {
    font-size: 14px;
    font-weight: bold;

    > span {
      color: var(--yellow);
      margin-left: 10px;
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > button + button {
    margin-left: 1rem;
  }
`;
export const PaginationButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 4px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--outline);
  color: var(--gray);
  transition: ease-in-out 0.2s;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  &[disabled] {
    background-color: var(--gray);
    cursor: not-allowed;
  }
  svg {
    text-align: center;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: var(--yellow);
      border-radius: 50%;
      font-weight: bold;
    `}
`;

PaginationButton.defaultProps = {
  isActive: false,
};

//////////////////////////////////////
export const Tab = styled.div`
  text-align: center;
  margin-top: 10px;
  padding: 11px 0 15px;

  font-weight: bold;
  font-size: 15px;

  outline: 0;
  cursor: pointer;

  color: var(--yellow);
  border-bottom: 2px solid var(--yellow);
  transition: ease-in-out 0.2s;

  &:hover {
    background: var(--twitter-dark-hover);
  }
`;
