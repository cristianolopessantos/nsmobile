import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { Container, TextButton, ContainerExit } from './styles';

export default function Button({children, loading, backColor, ...rest}) {
  return (
    <Container {...rest} underlayColor={'#4aa5db'} >
      {loading ? <ActivityIndicator size="small" color="#fff" /> : <TextButton>{children}</TextButton>}
    </Container>
  );
}


Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
};
