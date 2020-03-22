import React from 'react';
import { Container } from './styles';
import {getImages} from '../../utils/images';


export default function ImageLogo({src}) {
  return (
    <Container source={ getImages(`${src}`)}/>
  );
}
