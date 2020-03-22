import styled from 'styled-components/native';
import { Dimensions, Platform } from 'react-native'
import { RectButton } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Input from '../../Components/Input';

const width = Dimensions.get('window').height;
const height = Dimensions.get('window').height;

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === 'ios',
  behavior: 'padding'
})`
  flex:1;
  justify-content: center;
  align-items: center;
`;

export const Background = styled(LinearGradient).attrs({
  colors: ['#7665B8', '#5F8EAD'],
})`
width: 100%
height: ${height}px;
`

export const ImageLogo = styled.ImageBackground`
width: 100px
height: 100px;
margin-bottom:50px;
`


export const TextInputSign = styled.TextInput.attrs({
  autoCorrect: false,
  autoFocus: true,
  autoCapitalize: 'none',
  placeholderTextColor: '#5e5e5e'
})`
  height: 50px;
  width: ${width/3}px;
  marginBottom:5px;
  padding:16px;
  color: #5e5e5e;
  background-color: #f3f4f6;
  border-radius:5px;
`

export const SubmitLogin = styled(RectButton)`
height: 50px;
width: ${width/3}px;
background: #6064a1;
border-radius: 4px;

align-items: center;
justify-content: center;
`

export const TextButton = styled.Text`
  color: white;
  font-weight: bold;
`
export const TextToutch = styled.TouchableOpacity`

`
export const TextLink = styled.Text`
  color: white;
  font-size:16px;
  font-weight: bold;
  margin-top:10px;
`

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;
