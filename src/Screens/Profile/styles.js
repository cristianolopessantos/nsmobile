import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Input from '../../Components/Input'
const width = Dimensions.get('window').width;

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


export const ProfileView = styled.View`
flex:0.35;  
background-color: #fff;
justify-content: center;
margin:20px;
align-items: flex-start;
padding:16px;
border-radius: 10px;
`
export const ProfileInfos = styled.View`
flex-direction: row;
margin-top:10px;
align-items: center;
margin-right: 10px;
`

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;
