import React from 'react';
import { Text } from 'react-native';

import { Background, Container } from './styles';

export default function Profile() {
  return (
    <Background>
      <Container>
        <Text>MINHA AREA</Text>
        <Text>SAIR DA CONTA</Text>
      </Container>
    </Background>
  );
}
