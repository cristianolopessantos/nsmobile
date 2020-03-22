
import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#5e5e5e',
})`
  font-size: 15px;
  color: #5e5e5e;
  background-color: #f3f4f6;
  border-radius:4px;
  padding:16px;
  height:50px;
  width: ${width/1.4}px;
`;