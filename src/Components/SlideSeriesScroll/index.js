import React from 'react';
import {View, ScrollView, Image} from 'react-native';

// import { Container } from './styles';

export default function SlideSeriesScroll({data}) {
  return (
    <ScrollView horizontal={true}>
      {data.map((image, index) => {
        return (
          <Image
            source={image.poster}
            resizeMode="cover"
            style={{
              width: 116,
              height: 170,
              borderWidth: 2,
              borderRadius: 10,
              margin: 5,
            }}
          />
        );
      })}
    </ScrollView>
  );
}