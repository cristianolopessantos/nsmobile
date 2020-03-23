import React, {Component} from 'react';

import {ContainerBehind, Container, Background, TextLabel} from './styles';

import CarouselComponent from '../../Components/Carousel';
import SlideSeriesScroll from '../../Components/SlideSeriesScroll';

const posterArrow = require('../../assets/images/posters/arrow.jpg');
const posterFear = require('../../assets/images/posters/ftwd.jpg');
const rick = require('../../assets/images/posters/rick.jpg');
const pose = require('../../assets/images/posters/pose.jpg');
const brooklyn = require('../../assets/images/posters/brooklyn.jpg');
const outsider = require('../../assets/images/posters/outsider.jpg');
const got = require('../../assets/images/posters/got.jpg');
const twd = require('../../assets/images/posters/twd.jpg');
const chernobyl = require('../../assets/images/posters/chernobyl.jpg');
const carbon = require('../../assets/images/posters/carbon.jpg');
const hunters = require('../../assets/images/posters/hunters.jpg');
const better = require('../../assets/images/posters/better.jpg');
const west = require('../../assets/images/posters/west.jpg');
const greys = require('../../assets/images/posters/greys.jpg');
const vikings = require('../../assets/images/posters/vikings.jpg');
const supernatural = require('../../assets/images/posters/supernatural.jpg');
const handma = require('../../assets/images/posters/handma.jpg');
const outlander = require('../../assets/images/posters/outlander.jpg');
const homeland = require('../../assets/images/posters/homeland.jpg');
const stranger = require('../../assets/images/posters/stranger.jpg');

const watching = [
  {
    id: 1,
    poster: posterArrow,
  },
  {
    id: 1,
    poster: posterFear,
  },
  {
    id: 1,
    poster: rick,
  },
  {
    id: 1,
    poster: pose,
  },
  {
    id: 1,
    poster: west,
  },
];

const recomends = [
  {
    id: 1,
    poster: got,
  },
  {
    id: 1,
    poster: twd,
  },
  {
    id: 1,
    poster: chernobyl,
  },
  {
    id: 1,
    poster: brooklyn,
  },
  {
    id: 1,
    poster: greys,
  },
];
const popular = [
  {
    id: 1,
    poster: outsider,
  },
  {
    id: 1,
    poster: carbon,
  },
  {
    id: 1,
    poster: hunters,
  },
  {
    id: 1,
    poster: better,
  },
  {
    id: 1,
    poster: vikings,
  },
];

const suspense = [
  {
    id: 1,
    poster: supernatural,
  },
  {
    id: 1,
    poster: handma,
  },
  {
    id: 1,
    poster: outlander,
  },
  {
    id: 1,
    poster: homeland,
  },
  {
    id: 1,
    poster: stranger,
  },
];

export default class Present extends Component {
  render() {
    return (
      <ContainerBehind>
        <Container>
          <Background>
            <CarouselComponent />
            <TextLabel>Continuar assistindo</TextLabel>
            <SlideSeriesScroll data={watching} />
            <TextLabel>NetSeries recomenda</TextLabel>
            <SlideSeriesScroll data={recomends} />
            <TextLabel>Mais populares</TextLabel>
            <SlideSeriesScroll data={popular} />
            <TextLabel>Suspense</TextLabel>
            <SlideSeriesScroll data={suspense} />
          </Background>
        </Container>
      </ContainerBehind>
    );
  }
}
