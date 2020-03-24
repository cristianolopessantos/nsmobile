import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;

export const CarouselBackgroundView = styled.View`
  margin-top: -70px;
  height: 240px;
  width: 100%;
`;

export const CurrentVideoImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: ${windowWidth}px;
  height: 256px;
`;

export const ThumbnailBackgroundView = styled.View`
  align-items: center;
`;

export const CurrentVideoTO = styled.TouchableOpacity``;
