import React from 'react';
import { StyleButton } from './styles';

function Button(props) {
  const { outlined, text } = props;
  return <StyleButton outlined={outlined}>{text}</StyleButton>;
}

export default Button;
