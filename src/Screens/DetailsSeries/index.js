import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { Layout, Select } from '@ui-kitten/components';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {Background, Container, Infos, TextName, TextSeason} from './styles'

export class index extends Component {
  
  static propTypes = {
    prop: PropTypes
  }

  state = {
    selectedOption: 0
  }

  getDetails = () => {
    const {series,route} = this.props;
    const { itemId } = route.params;
    const found = series.find(element => element.id === itemId);
    
    const num_seasons = found.season;
    const aux = [{}];
    for(var i = 1; i <= num_seasons; i++){
      aux.push({text: `${i}ª temporada`})
    }

    if(found && found!== undefined){
      return (
        <Background>
          <Container>
            <Image source={{uri: found.poster}} resizeMode='contain' style={{width:'100%', height: 240, opacity:0.3}}/>
            <Infos>
              <TextName>{found.title}</TextName>
              <TextSeason>{found.season} temporadas</TextSeason>
              <Layout style={{minWidth: 200, borderRadius:10,marginTop:10}}>
                <Select
                  data={aux}
                  size='medium'
                  selectedOption={this.state.selectedOption}
                  onSelect={()=>{
                    this.setState({selectedOption:1})
                  }}
                />
              </Layout>
            </Infos>
            
          </Container>
        </Background>
      )
    }else{
      return null
    }
  }

  render() {
    
    return (  
      this.getDetails()
    )
  }
}

const mapStateToProps = (state) => ({
  series: state.seriesReducer.series
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
