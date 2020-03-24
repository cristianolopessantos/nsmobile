import React from 'react';
import {View, ScrollView, Image, TouchableOpacity} from 'react-native';

// import { Container } from './styles';

export default function SlideSeriesScroll({navigation, data}) {

  function showDetails(id){
    navigation.navigate('Detalhes', {
      itemId: id,
    });
  
  }

  return (
    <ScrollView horizontal={true}>
      {data.map((image, index) => {
        return (
          <View key={index}>
            <TouchableOpacity onPress={()=>{showDetails(image.id)}}>
              <Image
                key={index}
                source={{uri: image.thumb}}
                resizeMode="cover"
                style={{
                  width: 116,
                  height: 170,
                  borderWidth: 2,
                  borderRadius: 10,
                  margin: 5,
                }}
              />
            </TouchableOpacity>
          </View>
        );
      })}
    </ScrollView>
  );
}
