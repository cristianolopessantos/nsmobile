import styled from 'styled-components/native';
import { FlatList } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

export const Background = styled(LinearGradient).attrs({
  colors: ['#000', '#000'],
})`flex:1;  align-items: center`

export const Container = styled.View`
  flex:1;
  
`;

export const ContainerContent = styled.View`
  flex:1;
  align-items: center;
`;

export const ImgPoster = styled.Image`
  width: 100%;
  height:250px;
`

export const Infos = styled.View`
  flex:1;
  align-items:center;
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
  font-size:12px;
  font-weight: bold;
`
export const FlatListEpisodes = styled(FlatList)`
margin-top:10px;
margin-bottom:10px;
`

export const ViewItem = styled.View`
  
`

export const ViewRowInfo = styled.View`
  flex-direction: row;
  width: ${width/1.05}px;
  margin-horizontal:10px;
  margin-vertical: 5px;
  background-color: #1c1c1e;
  border-radius:10px;
`

export const ImageEpisode = styled.Image`
  width: 141px;
  height:80px;
  border-top-left-radius:10px;
  border-bottom-left-radius:10px;
`

export const ViewEps = styled.View`
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
`

export const TextInfo = styled.Text`
  color: #99a0aa;
  font-size:12px;
`