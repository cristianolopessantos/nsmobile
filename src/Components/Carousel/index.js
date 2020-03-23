import React, {Component} from 'react';
import {connect} from 'react-redux'
import {View, Dimensions} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import {
  VideoTitleText,
  CurrentVideoImage,
  ThumbnailBackgroundView,
  CurrentVideoTO,
  CarouselBackgroundView,
} from './styles';

const windowWidth = Dimensions.get('window').width;

class CarouselComponent extends Component {
  
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
          <CurrentVideoImage source={{uri: item.thumb}} />
        </CurrentVideoTO>
        {/*<NextVideoImage source={{ uri: this.state.currentVideo.nextVideoId }}/>*/}
        {/* <VideoTitleText>{item.title}</VideoTitleText> */}
      </ThumbnailBackgroundView>
    );
  };

  render() {
    const {seriesBanner} = this.props;
    return (
      <CarouselBackgroundView>
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={seriesBanner}
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
            dotsLength={seriesBanner.length}
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


const mapStateToProps = (state) => ({
  seriesBanner: state.seriesReducer.seriesBanner
})

export default connect(mapStateToProps)(CarouselComponent)