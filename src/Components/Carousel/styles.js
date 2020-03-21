import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;

export const CarouselBackgroundView = styled.View`
  height: 256px;
  width: ${windowWidth};
`;

export const CurrentVideoImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 760px;
  height: 256px;
`;

export const ThumbnailBackgroundView = styled.View`
  align-items: center;
`;

export const CurrentVideoTO = styled.TouchableOpacity``;
