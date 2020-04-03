import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {Platform} from 'react-native'
export const Container = styled.SafeAreaView`
  flex:1
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Background = styled(LinearGradient).attrs({
  colors: ['#000', '#000'],
})`
  flex: 1;
`;
export const AutoCompleteView = styled.View.attrs({
  
})`
  width: 90%;
`
