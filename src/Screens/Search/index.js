import React, {useState} from 'react';
import {Platform, StyleSheet, Image, Text} from 'react-native';
import {
  Autocomplete,
  Layout,
} from '@ui-kitten/components';
import { connect, useSelector } from 'react-redux';
import { Background, Container, AutoCompleteView } from './styles';


const top =  Platform.OS === 'ios';
function Search() {
  
  const [value, setValue] = useState(null);
  const [data, setData] = useState(useSelector(state => state.seriesReducer.series));
  const [data_initial] = useState(useSelector(state => state.seriesReducer.series));
  const [data_image_select, setImage] = useState(null);
 
  const renderResult = (thumb) => {
    return (
      setImage(thumb)
    )
  }

  const onSelect = ({ title, thumb }) => {
    setValue(title);
    renderResult(thumb);
  };

  const onChangeText = (query, thumb) => {
    setValue(query);
    setData(data_initial.filter(item => item.title.toLowerCase().includes(query.toLowerCase())));
    setImage(thumb)
  };

  

  return (
    <Background>
    
    <Container>
      <AutoCompleteView>
      <Autocomplete style={(top)? styles.ios : styles.android}
          placeholder='Buscar séries'
          value={value}
          size='medium'
          data={data}
          onChangeText={onChangeText}
          onSelect={onSelect}
        />
      </AutoCompleteView>
      <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold', marginTop:20}}>Resultados:</Text>
      {data_image_select && data_image_select !== null ? (
        <Image source={{uri:data_image_select}} resizeMode= 'contain' style={{height: 350, width: 240, borderRadius: 10, marginTop: 20, borderWidth: 2, borderColor: 'white'}}/>
      ):null}
    </Container>
  </Background>
  );
}
const mapStateToProps = (state) => ({
  series: state.seriesReducer.series
})

const mapDispatchToProps = {
  
}

var styles = StyleSheet.create({

  ios: {
    minWidth: 250, borderRadius: 5, backgroundColor: '#f3f4f6', color: '#5e5e5e',marginTop:80
  },
  android:{
    minWidth: 250, borderRadius: 5, backgroundColor: '#f3f4f6', color: '#5e5e5e'
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(Search)