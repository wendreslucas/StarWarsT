import styled, { css } from 'styled-components';
import {
  Home,
  SiDarkreader,
  GiDeathStar,
  RiSpaceShipLine,
  GiExitDoor,
} from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: min(601px, 100%);

  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;
export const Header = styled.div`
  z-index: 2;
  position: sticky;
  top: 0;
  background: var(--primary);

  display: flex;
  align-items: center;

  text-align: left;

  padding: 8px 0 9px 13px;
  border-bottom: 1px solid var(--outline);

  > button {
    padding: 8px;
    border-radius: 50%;

    outline: 0;
    cursor: pointer;
    transition: ease-in-out 0.2s;

    &:hover {
      background: var(--twitter-dark-hover);
    }
  }
`;
// export const BackIcon = styled(ArrowLeft)`
//   width: 24px;
//   height: 24px;
//   transition: ease-in-out 0.2s;

//   &:hover {
//     > path {
//       color: var(--twitter);
//     }
//   }
// `;
export const ProfileInfo = styled.div`
  margin-left: 17px;

  display: flex;
  flex-direction: column;

  > strong {
    font-size: 19px;
  }

  > span {
    font-size: 15px;
    color: var(--gray);
  }
`;
export const BottomMenu = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;

  background: var(--primary);
  width: 100%;
  border-top: 1px solid var(--outline);

  display: flex;
  justify-content: space-between;

  padding: 8px min(46px, max(10vw, 10px));

  @media (min-width: 500px) {
    display: none;
  }
`;

const iconCSS = css`
  width: 31px;
  height: 31px;
  cursor: pointer;
  transition: ease-in-out 0.2s;

  fill: var(--gray);
  &:hover,
  &:active {
    fill: var(--yellow);
  }
`;

export const HomeIcon = styled(Home)`
  ${iconCSS}
`;
export const Persons = styled(SiDarkreader)`
  ${iconCSS}
`;
export const StarShip = styled(RiSpaceShipLine)`
  ${iconCSS}
`;
export const PlanetsIcon = styled(GiDeathStar)`
  ${iconCSS}
`;

export const ExitDoor = styled(GiExitDoor)`
  ${iconCSS}
`;
