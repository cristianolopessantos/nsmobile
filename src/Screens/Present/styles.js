import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {ScrollView} from 'react-native';

export const ContainerBehind = styled.View`
  flex: 1;
  background-color: #000;
`;

export const Container = styled(ScrollView).attrs({
  directionalLockEnabled: true,
  endFillColor: 'red',
})``;

export const Background = styled(LinearGradient).attrs({
  colors: ['#252533', '#171b1e'],
})`
  flex: 1;
`;

export const TextLabel = styled.Text`
  color: white;
  font-weight: bold;
  margin-left: 5px;
  margin-bottom: 5px;
  font-size: 20px;
`;
