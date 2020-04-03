import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const ContainerAll = styled.View`
  flex: 1;
`;

export const Background = styled(LinearGradient).attrs({
  colors: ['#000', '#000'],
})`
  flex: 1;
  padding-top:16px;
`;

export const TextHeader = styled.Text`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 25px;
  font-weight: bold;
  color: white;
  text-align: center;
`;

export const SeriesListView = styled.ScrollView.attrs({})``;
export const SeriesList = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ContainerBehind = styled.SafeAreaView`
  flex: 1;
  background-color: rgba(23, 27, 30, 1);
  padding-bottom:16px;
`;

export const Container = styled.ScrollView.attrs({
  directionalLockEnabled: true,
  endFillColor: 'red',
})``;


export const TextLabel = styled.Text`
  color: white;
  font-weight: bold;
  margin-left: 10px;
  margin-bottom: 5px;
  font-size: 20px;
  padding-left:5px;
`;
