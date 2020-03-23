import React, {Component} from 'react';
import {connect} from 'react-redux'

import {ContainerBehind, Container, Background, TextLabel} from './styles';

import CarouselComponent from '../../Components/Carousel';
import SlideSeriesScroll from '../../Components/SlideSeriesScroll';

class Present extends Component {
  render() {
    const {series} = this.props;
    var data_watch = [];
    var data_recomends = [];
    var data_popular = [];
    var data_suspense = [];
    series.map(serie=>{
      switch(serie.flag){
        case 'watching':
          data_watch.push(serie);
          break;
        case 'recomends':
          data_recomends.push(serie);
          break;
        case 'popular':
          data_popular.push(serie);
          break;
        case 'suspense':
          data_suspense.push(serie);
          break;

        default: null
      }
    })

    return (
      <ContainerBehind>
        <Container>
          <Background>
            <CarouselComponent />
            <TextLabel>Continuar assistindo</TextLabel>
            <SlideSeriesScroll data={data_watch} />
            <TextLabel>NetSeries recomenda</TextLabel>
            <SlideSeriesScroll data={data_recomends} />
            <TextLabel>Mais populares</TextLabel>
            <SlideSeriesScroll data={data_popular} />
            <TextLabel>Suspense</TextLabel>
            <SlideSeriesScroll data={data_suspense} />
          </Background>
        </Container>
      </ContainerBehind>
    );
  }
}

const mapStateToProps = (state) => ({
  series: state.seriesReducer.series
})

export default connect(mapStateToProps)(Present)