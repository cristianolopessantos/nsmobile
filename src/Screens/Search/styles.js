import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  flex:1
  justify-content: center;
  align-items: center;
`;

export const Background = styled(LinearGradient).attrs({
  colors: ['#252533', '#171b1e'],
})`
  flex: 1;
`;
