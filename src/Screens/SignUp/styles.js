import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import Input from '../../Components/Input'
import { Dimensions, Platform } from 'react-native'

const height = Dimensions.get('window').height;

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === 'ios',
  behavior: 'padding'
})`
  flex:1;
  align-items: center;
`;
export const Form = styled.View`
  
  
`;

export const FormInput = styled(Input)`
  margin-top: 10px;
`;
export const Background = styled(LinearGradient).attrs({
  colors: ['#252533', '#171b1e'],
})`
width: 100%
height: ${height}px;
`

