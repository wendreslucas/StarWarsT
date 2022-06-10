import styled from 'styled-components';

export const Button = styled.button`
  background: ${(props) => (props.outlined ? 'transparent' : 'var(--yellow)')};
  color: ${(props) => (props.outlined ? 'var(--yellow)' : 'var(--white)')};
  border: ${(props) => (props.outlined ? '1px solid var(--yellow)' : 'none')};

  padding: 16px;
  border-radius: 25px;

  cursor: pointer;
  outline: 0;

  font-weight: bold;
  font-size: 15px;

  &:hover {
    background: ${(props) =>
      props.outlined
        ? 'var(--twitter-dark-hover)'
        : 'var(--twitter-light-hover)'};
  }
`;
