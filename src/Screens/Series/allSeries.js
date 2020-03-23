import React from 'react';
import {Image} from 'react-native';

const data = [
  {
    id: 1,
    image: require('../../../assets/images/posters/arrow.jpg'),
  },
  {
    id: 2,
    image: require('../../../assets/images/posters/ftwd.jpg'),
  },
  {
    id: 3,
    image: require('../../../assets/images/posters/rick.jpg'),
  },
  {
    id: 4,
    image: require('../../../assets/images/posters/pose.jpg'),
  },
  {
    id: 5,
    image: require('../../../assets/images/posters/brooklyn.jpg'),
  },
  {
    id: 6,
    image: require('../../../assets/images/posters/outsider.jpg'),
  },
  {
    id: 7,
    image: require('../../../assets/images/posters/got.jpg'),
  },
  {
    id: 8,
    image: require('../../../assets/images/posters/twd.jpg'),
  },
  {
    id: 9,
    image: require('../../../assets/images/posters/chernobyl.jpg'),
  },
  {
    id: 10,
    image: require('../../../assets/images/posters/carbon.jpg'),
  },
  {
    id: 11,
    image: require('../../../assets/images/posters/hunters.jpg'),
  },
  {
    id: 12,
    image: require('../../../assets/images/posters/better.jpg'),
  },
  {
    id: 13,
    image: require('../../../assets/images/posters/west.jpg'),
  },
  {
    id: 14,
    image: require('../../../assets/images/posters/greys.jpg'),
  },
  {
    id: 15,
    image: require('../../../assets/images/posters/vikings.jpg'),
  },
  {
    id: 16,
    image: require('../../../assets/images/posters/supernatural.jpg'),
  },
  {
    id: 17,
    image: require('../../../assets/images/posters/handma.jpg'),
  },
  {
    id: 18,
    image: require('../../../assets/images/posters/outlander.jpg'),
  },
  {
    id: 19,
    image: require('../../../assets/images/posters/homeland.jpg'),
  },
  {
    id: 20,
    image: require('../../../assets/images/posters/stranger.jpg'),
  },
];

import {
  ContainerAll,
  Background,
  TextHeader,
  SeriesList,
  SeriesListView,
} from './styles';

export default function AllSeries() {
  return (
    <ContainerAll>
      <Background>
        <TextHeader>Todas as series</TextHeader>
        <SeriesListView>
          <SeriesList>
            {data.map((image, index) => {
              return (
                <Image
                  source={image.image}
                  style={{
                    height: 367,
                    width: 250,
                    borderRadius: 10,
                    margin: 10,
                  }}
                />
              );
            })}
          </SeriesList>
        </SeriesListView>
      </Background>
    </ContainerAll>
  );
}
