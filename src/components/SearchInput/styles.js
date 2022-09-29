import styled from 'styled-components';
import { Search } from 'styled-icons/material-outlined';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 10px;
`;

export const SearchWrapper = styled.div`
  padding: 10px 24px;
  width: min(399px, 100%);

  /* position: fixed; */
  top: 0;
  z-index: 2;
  background: var(--primary);

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
    border: 1px solid var(--gray);

    ~ svg {
      fill: var(--gray);
    }
  }
`;

export const SearchIcon = styled(Search)`
  width: 27px;
  height: 27px;

  fill: var(--gray);
`;
