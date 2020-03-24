import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {Platform} from 'react-native'
export const Container = styled.View`
  flex:1
  justify-content: flex-start;
  align-items: center;
`;

export const Background = styled(LinearGradient).attrs({
  colors: ['#252533', '#171b1e'],
})`
  flex: 1;
`;
export const AutoCompleteView = styled.View.attrs({
  
})`
  width: 350px;
  margin-horizontal: 20px;
  border-radius: 10px;
`
