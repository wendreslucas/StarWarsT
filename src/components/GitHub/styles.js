import styled from 'styled-components';
import { Button } from '../Button';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
  }
`;

export const Avatar = styled.img`
  width: 49px;
  height: 49px;
  background: var(--gray);
  border-radius: 50%;
  margin-right: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 14px;
  }

  > span {
    font-size: 14px;
    color: var(--gray);

    > a {
      text-decoration: none;
      color: var(--gray);
      transition: ease-in-out 0.2s;

      &:hover {
        background: var(--twitter-dark-hover);
        color: var(--yellow);
      }
    }
  }
`;

export const FollowButton = styled(Button)`
  padding: 6px 17px;
`;
