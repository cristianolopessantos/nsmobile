import React, {Component} from 'react';

import {View, Dimensions} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import {
  VideoTitleText,
  CurrentVideoImage,
  ThumbnailBackgroundView,
  CurrentVideoTO,
  CarouselBackgroundView,
} from './styles';

const bannerThe100 = require('../../../assets/images/banners/the100.jpg');
const bannerStranger = require('../../../assets/images/banners/stranger.jpg');
const bannerArrow = require('../../../assets/images/banners/legends.jpg');

const windowWidth = Dimensions.get('window').width;

export default class CarouselComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      errors: [],
    };
    this.props = props;
    this._carousel = {};
    this.init();
  }

  init() {
    this.state = {
      videos: [
        {
          id: 'WpIAc9by5iU',
          thumbnail: bannerStranger,
        },
        {
          id: 'sNPnbI1arSE',
          thumbnail: bannerArrow,
        },
        {
          id: 'VOgFZfRVaww',
          thumbnail: bannerThe100,
        },
      ],
      activeSlide: 0,
    };

    console.log('ThumbnailCarousel Props: ', this.props);
  }

  componentDidMount() {
    this._carousel.snapToItem(2);
  }

  handleSnapToItem(index) {
    this.setState({activeSlide: index});
    console.log('snapped to ', index);
  }

  _renderItem = ({item, index}) => {
    console.log('rendering,', index, item);
    return (
      <ThumbnailBackgroundView>
        <CurrentVideoTO
          onPress={() => {
            console.log('clicked to index', index);
            this._carousel.snapToItem(index);
          }}>
          <CurrentVideoImage source={item.thumbnail} />
        </CurrentVideoTO>
        {/*<NextVideoImage source={{ uri: this.state.currentVideo.nextVideoId }}/>*/}
        {/* <VideoTitleText>{item.title}</VideoTitleText> */}
      </ThumbnailBackgroundView>
    );
  };

  render() {
    return (
      <CarouselBackgroundView>
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={this.state.videos}
          renderItem={this._renderItem.bind(this)}
          onSnapToItem={this.handleSnapToItem.bind(this)}
          sliderWidth={windowWidth}
          itemWidth={windowWidth}
          layout={'default'}
          firstItem={0}
        />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Pagination
            dotsLength={this.state.videos.length}
            activeDotIndex={this.state.activeSlide}
            dotStyle={{
              backgroundColor: 'white',
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
        </View>
      </CarouselBackgroundView>
    );
  }
}
