import React from 'react';

import { Container, Item, Title } from './styles';

const List = (props) => {
  const { title, elements } = props;
  return (
    <Container>
      <Item>
        <Title>{title}</Title>
      </Item>
      {elements.map((element, index) => (
        <Item key={index}>{element}</Item>
      ))}
    </Container>
  );
};

export default List;
