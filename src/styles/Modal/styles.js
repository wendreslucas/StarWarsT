import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  border-radius: 8px;
  max-width: 800px;
  margin: 80px auto 0 auto;
  padding: 15px;
`;
export const Overlay = styled.div`
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const CloseButton = styled.button`
  float: right;
  background: unset;
  border: unset;
`;
