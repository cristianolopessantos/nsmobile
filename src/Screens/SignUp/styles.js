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
  justify-content: center;
  align-items: center;
`;
export const Form = styled.View`
`;

export const TextToutch = styled.TouchableOpacity`

`
export const TextLink = styled.Text`
  color: white;
  font-size:16px;
  font-weight: bold;
  margin-top:10px;
`

export const FormInput = styled(Input)`
  margin-top: 10px;
`;
export const Background = styled(LinearGradient).attrs({
  colors: ['#32536B', '#8DA5B8'],
})`
width: 100%
height: ${height}px;
`

