import styled, { css } from 'styled-components';
import {
  Notifications,
  Email,
  FavoriteBorder,
  Person,
  ExitToApp,
} from '../../styles/Icons';

export const Container = styled.div`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: sticky;
    top: 0;
    left: 0;
    padding: 9px 19px 20px;
    max-height: 100vh;
    overflow-y: auto;
  }
`;

export const Topside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    align-items: flex-start;
  }
`;

export const DivLogo = styled.div`
  width: 190px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  margin-bottom: 20px;
  width: 50%;
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  color: ${(props) => (props.active ? 'var(--yellow)' : 'var(--white)')};
  > span {
    display: none;
  }

  @media (min-width: 1024px) {
    > span {
      display: inline;
      margin-left: 19px;
      font-weight: bold;
      font-size: 19px;
    }
    padding-right: 15px;
  }

  padding: 8.25px 0;
  outline: 0;

  & + button {
    margin-top: 16.5px;
  }

  & + button:last-child {
    margin-top: 33px;
    width: 40px;
    height: 40px;

    > span {
      display: none;
    }

    @media (min-width: 1024px) {
      width: 100%;
      height: unset;

      > span {
        display: inline;
      }
    }
  }

  cursor: pointer;
  border-radius: 25px;
  transition: ease-in-out 0.2s;

  &:hover {
    background: var(--twitter-dark-hover);
    color: var(--yellow);
  }

  &:hover,
  &.active {
    span,
    svg path {
      color: var(--yellow);
      fill: var(--yellow);
    }
  }
`;

const iconCss = css`
  flex-shrink: 0;
  width: 30px;
  height: 30px;
`;

export const BellIcon = styled(Notifications)`
  ${iconCss}
`;

export const EmailIcon = styled(Email)`
  ${iconCss}
`;

export const FavoriteIcon = styled(FavoriteBorder)`
  ${iconCss}
`;

export const ProfileIcon = styled(Person)`
  ${iconCss}
`;

export const Botside = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 39px;
  height: 39px;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--gray);
`;

export const ProfileData = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    font-size: 12px;
    > span {
      color: var(--gray);
    }
  }
`;

export const ExitIcon = styled(ExitToApp)`
  display: none;

  @media (min-width: 1024px) {
    display: inline-block;
    width: 25px;
    height: 25px;
    color: var(--white);
    margin-left: 30px;
    cursor: pointer;
    transition: ease-in-out 0.2s;

    &:hover {
      > path {
        color: var(--like);
      }
    }
  }
`;
