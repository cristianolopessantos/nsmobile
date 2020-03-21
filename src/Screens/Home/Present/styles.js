import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {ScrollView} from 'react-native';

export const Container = styled(ScrollView).attrs({
  directionalLockEnabled: true,
  endFillColor: 'red',
})``;
export const Background = styled(LinearGradient).attrs({
  colors: ['#252533', '#171b1e'],
})`
  flex: 1;
`;
