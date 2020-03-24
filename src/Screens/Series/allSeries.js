import React, { Component } from 'react'
import { Image, View } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CarouselComponent from '../../Components/Carousel';
import SlideSeriesScroll from '../../Components/SlideSeriesScroll';

import {
  ContainerBehind,
  Container,
  Background,
  TextLabel,
} from './styles';

export class allSeries extends Component {
  static propTypes = {
    // prop: PropTypes
  }
  
  render() {
    const {series, navigation} = this.props;
    var data_action = [];
    var data_adventure = [];
    var data_comedia = [];
    var data_crime = [];
    var data_drama = [];
    var data_fantasy = [];
    var data_science_fiction = [];
    var data_suspense = [];
    var data_thriller = [];

    series.map(serie=>{
      serie.genres.map((genre,index)=>{
        switch(genre.genre){
          case 'action':
            data_action.push(serie)
            break;
          case 'adventure':
            data_adventure.push(serie)
            break;
          case 'comedy':
            data_comedia.push(serie)
            break;
          case 'crime':
            data_crime.push(serie)
            break;
          case 'drama':
            data_drama.push(serie)
            break;
          case 'fantasy':
            data_fantasy.push(serie)
            break;
          case 'science-fiction':
            data_science_fiction.push(serie)
            break;
          case 'suspense':
            data_suspense.push(serie)
            break;
          case 'thriller':
            data_thriller.push(serie)
            break;
          default: null
        }
      })
    })
    return (
      <ContainerBehind>
        <Container>
          <Background>
            <TextLabel>Ação</TextLabel>
            <SlideSeriesScroll data={data_action} navigation={navigation} />
            <TextLabel>Aventura</TextLabel>
            <SlideSeriesScroll data={data_adventure} navigation={navigation} />
            <TextLabel>Comédia</TextLabel>
            <SlideSeriesScroll data={data_comedia} navigation={navigation}/>
            <TextLabel>Crime</TextLabel>
            <SlideSeriesScroll data={data_crime}navigation={navigation} />
            <TextLabel>Drama</TextLabel>
            <SlideSeriesScroll data={data_drama}navigation={navigation} />
            <TextLabel>Fantasia</TextLabel>
            <SlideSeriesScroll data={data_fantasy} navigation={navigation}/>
            <TextLabel>Ficção científica</TextLabel>
            <SlideSeriesScroll data={data_science_fiction} navigation={navigation}/>
            <TextLabel>Suspense</TextLabel>
            <SlideSeriesScroll data={data_suspense} navigation={navigation}/>
            <TextLabel>Thriller</TextLabel>
            <SlideSeriesScroll data={data_thriller} navigation={navigation}/>
          </Background>
        </Container>
      </ContainerBehind>
    )
  }
}

const mapStateToProps = (state) => ({
  series: state.seriesReducer.series
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(allSeries)
