import styled, { css } from 'styled-components';
import { Chat, Retweet, Favorite } from '../../../styles/Icons';
import { Search } from '../../../styles/Icons';

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
    color: var(--yellow);
  }

  > span,
  time {
    color: var(--gray);
  }

  > strong,
  span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const Dot = styled.div`
  background: var(--gray);
  width: 2px;
  height: 2px;
  margin: 0 10px;
`;

export const Description = styled.p`
  font-size: 14px;
  margin-top: 4px;
  color: var(--white);
`;

export const ImageContent = styled.img`
  margin-top: 12px;
  display: flex;
  align-self: center;
  width: 50%;
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

export const SearchWrapper = styled.div`
  padding: 10px 24px;
  width: min(399px, 100%);
  /* position: fixed; */

  top: 0;
  z-index: 2;
  /* background: var(--primary); */

  max-height: 57px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 39px;
  font-size: 14px;
  padding: 0 10px 0 52px;
  border-radius: 19.5px;
  background: var(--search);

  &::placeholder {
    color: var(--gray);
  }

  ~ svg {
    position: relative;
    top: -33px;
    left: 15px;
    z-index: 1;

    transition: 180ms ease-in-out;
  }

  outline: 0;

  &:focus {
    border: 1px solid var(--yellow);

    ~ svg {
      fill: var(--yellow);
    }
  }
`;

export const SearchIcon = styled(Search)`
  width: 27px;
  height: 27px;

  fill: var(--gray);
`;

export const LoadingDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
