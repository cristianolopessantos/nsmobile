import styled from 'styled-components/native';
import { Dimensions, Platform } from 'react-native'
import { RectButton } from 'react-native-gesture-handler';


const width = Dimensions.get('window').height;
// const height = Dimensions.get('window').height;
export const Container = styled(RectButton)`
height: 50px;
width: ${width/3}px;
background: #32536B;
border-radius: 4px;
margin-top:10px;
align-items: center;
justify-content: center;
`


export const TextButton = styled.Text`
  color: white;
  font-weight: bold;
`