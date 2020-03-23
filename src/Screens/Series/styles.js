import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const ContainerAll = styled.View`
  flex: 1;
`;

export const Background = styled(LinearGradient).attrs({
  colors: ['#252533', '#171b1e'],
})`
  flex: 1;
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

export const ContainerBehind = styled.View`
  flex: 1;
  background-color: #000;
`;

export const Container = styled.ScrollView.attrs({
  directionalLockEnabled: true,
  endFillColor: 'red',
})``;


export const TextLabel = styled.Text`
  color: white;
  font-weight: bold;
  margin-left: 5px;
  margin-bottom: 5px;
  font-size: 20px;
`;
