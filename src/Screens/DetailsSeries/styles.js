import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Background = styled(LinearGradient).attrs({
  colors: ['#252533', '#171b1e'],
})`flex:1`

export const Container = styled.ScrollView`
  
`;

export const Infos = styled.View`
  flex:1;
  justify-content: center;
  align-items:center;
  flex-direction: column;
`
export const TextName = styled.Text`
  color: white;
  font-size:25px;
  font-weight: bold;
`

export const TextSeason = styled.Text`
  color: white;
  font-size:10px;
  font-weight: bold;
`

