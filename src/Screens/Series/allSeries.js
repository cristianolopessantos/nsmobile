import React, { Component } from 'react'
import { Image, View } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  ContainerAll,
  Background,
  TextHeader,
  SeriesList,
  SeriesListView,
} from './styles';

export class allSeries extends Component {
  static propTypes = {
    // prop: PropTypes
  }

  render() {
    const {series} = this.props;
    return (
      <ContainerAll>
      <Background>
        <TextHeader>Todas as series</TextHeader>
        <SeriesListView>
          <SeriesList>
            {series.map((image, index) => {
              return (
                <View key={index}>
                  <Image
                    source={{uri: image.thumb}}
                    style={{
                      height: 367,
                      width: 250,
                      borderRadius: 10,
                      margin: 10,
                    }}
                  />
                </View>
              );
            })}
          </SeriesList>
        </SeriesListView>
      </Background>
    </ContainerAll>
    )
  }
}

const mapStateToProps = (state) => ({
  series: state.seriesReducer.series
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(allSeries)
