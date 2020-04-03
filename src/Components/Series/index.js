import React, { Component } from 'react';

import { View, Animated, Text, Image, StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Container } from './styles';

export default class Series extends Component {

  state= {
    opacity: new Animated.Value(0),
    offset: new Animated.ValueXY({x:0, y:50})
  }

  componentDidMount(){
    Animated.parallel([

      Animated.spring(this.state.offset.y,{
        toValue:0,
        speed:5,
        bounciness:20
      }),
      Animated.timing(this.state.opacity, {
        toValue:1,
        duration: 500,
      })
    ]).start();
  }

  render() {
    const {user} = this.props;
    return (
      <Animated.View style={[
        {transform: [...this.state.offset.getTranslateTransform()]},
        {opacity: this.state.opacity}
      ]}>
        <TouchableWithoutFeedback>
          <View style={styles.userContainer}>
            <Image
              style={styles.thumbnail}
              source= {{uri:'https://artworks.thetvdb.com/banners/fanart/original/73762-30_t.jpg'}}
            />

            <View style={[styles.infoContainer, {}]}>
              <View style={styles.bioContainer}>
                <Text style={styles.name}>NOME</Text>
                <Text style={styles.description}>DESCRICAO</Text>
              </View>
              <View style={styles.likesContainer}>
                <Icon name='heart' size={12} color={'fff'}/>
                <Text style={styles.likes}>20</Text>
              </View> 
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Animated.View>
    )
  } 
}

const styles = StyleSheet.create({
  userContainer:{
    marginTop:10,
    borderRadius:10,
    flexDirection: 'column'
  },
  thumbnail:{

  },
  infoContainer:{

  },
  bioContainer:{

  },
  name:{

  },
  description:{

  },
  likesContainer:{

  },
  likes:{

  },
})