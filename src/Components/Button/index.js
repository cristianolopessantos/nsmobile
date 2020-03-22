import React from 'react';
import { Text } from 'react-native';

import { Container, TextButton } from './styles';

export default function Button({text}) {
  return (
    <Container>
      <TextButton>{text}</TextButton>
    </Container>
  );
}
