import React, { Component } from 'react'
import { ScrollView, Text, Animated, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Layout,Select} from '@ui-kitten/components'
import {Background, ViewRowInfo, ImageEpisode, ViewEps, TextSeason, TextInfo} from './styles'

export class Details extends Component {
  state = {
    scrollY: new Animated.Value(0),
    offsetY: new Animated.Value(30),
    selectedOption: 0,
    filterEpisodes: null
  }

  renderEpisodesBySeason = episodes => {
    const {navigation} = this.props;
    const aux = [];
    episodes.map(item=>{
      item.eps.map((episodio, index)=>{
        aux.push(
          <TouchableOpacity onPress={()=>{
            navigation.navigate('Play')}}>
          <ViewRowInfo>
            <ImageEpisode source={{uri: episodio.thumb}} />
            <ViewEps key={index}>
              <TextSeason style={{color: 'white', fontWeight:'bold'}}>{episodio.aired}</TextSeason>
              <TextInfo>{episodio.name}</TextInfo>
              <TextInfo>{episodio.released}</TextInfo>
            </ViewEps>
          </ViewRowInfo>
          </TouchableOpacity>
        )
      })
    });
    return aux;
  }

  headerSerie(){
    const {series, route} = this.props;
    const found = series.find(element => element.id === route.params.itemId);
    return <Animated.View
    style={[
      styles.imageHeader,
      {
     
        height: this.state.scrollY.interpolate({
          inputRange: [0,120],
          outputRange: [290,105],
          extrapolate: 'clamp'
        })
      }
    ]}>
         <Animated.Image
          style={[
            styles.imageHeader,
            {
              opacity: this.state.scrollY.interpolate({
                inputRange: [0,140],
                outputRange: [1,0.2],
                extrapolate:'clamp'
              }),
              height: this.state.scrollY.interpolate({
                inputRange: [0,120],
                outputRange: [250,100],
                extrapolate: 'clamp'
              })
            }
          ]}
          source={{uri: found.poster}}
        />

        <Animated.Text
          style={[
            styles.textTitle,
            {
              top: this.state.scrollY.interpolate({
                inputRange: [0,120],
                outputRange: [0,-40],
                extrapolate: 'clamp'
              }),
              fontSize: this.state.scrollY.interpolate({
                inputRange: [0,120],
                outputRange: [26,16],
                extrapolate: 'clamp'
              })
            }
          ]}
        >
          {found.title}
        </Animated.Text>
        <Animated.Text
          style={[
            styles.textTitle,
            {
              top: this.state.scrollY.interpolate({
                inputRange: [0,120],
                outputRange: [0,-40],
                extrapolate: 'clamp'
              }),
              fontSize: this.state.scrollY.interpolate({
                inputRange: [0,120],
                outputRange: [16,10],
                extrapolate: 'clamp'
              })
            }
          ]}
        >
          {`${found.season} temporadas`}
        </Animated.Text>
      </Animated.View>
   
  }

  handleSelect = index => {
    const {episodes} = this.props;
      this.setState({selectedOption: index.id})
      const foundSeriesEpisodes = episodes.filter(item=> item.season === index.id)
      this.setState({filterEpisodes: foundSeriesEpisodes })
  }

  renderSelect(){
    const {series, route} = this.props;
    const found = series.find(element => element.id === route.params.itemId);
    const num_seasons = found.season;
    const aux = [{text: 'Todos os episódios', id:0}];
    var iterator = 1;
    while(iterator<=num_seasons){
      aux.push({text: `${iterator}ª temporada`,id:iterator})
      iterator++;
    }
    return (

      <Layout style={{minWidth: 200, borderRadius:10,margin:10}}>      
        <Select
            data={aux}
            size='medium'                 
            placeholder={'Temporadas'}
            selectedOption={2}
            onSelect={this.handleSelect.bind(this)}
          />
      </Layout>
    );
  }

  componentDidMount(){
    Animated.spring(this.state.offsetY, {
      toValue: 0,
      speed: 6,
      bounciness: 30,
    }).start();
  }

  render() {
    const {episodes} = this.props;
    return (
      <Background>
        
         {this.headerSerie()}         
         {this.renderSelect()}
      
         <ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
          )}
         >
            <Animated.View
            style={[
              {transform: [
                {translateY: this.state.offsetY}
              ]}
            ]}
          >
            {this.renderEpisodesBySeason(this.state.selectedOption === 0 ? episodes: this.state.filterEpisodes)}
            </Animated.View>
         </ScrollView>
        
      </Background>
    )
  }
}

const mapStateToProps = (state) => ({
  series: state.seriesReducer.series,
  episodes: state.episodesReducer.episodes,
})

const mapDispatchToProps = {
  
}

const styles = StyleSheet.create({
  imageHeader:{
    width: '100%',
  },
  textTitle: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Details)
