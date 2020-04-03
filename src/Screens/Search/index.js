import React, {useState} from 'react';
import {Platform, StyleSheet, Image, Text, View, TextInput, FlatList, Dimensions} from 'react-native';
import {
  Autocomplete,
  Layout,
} from '@ui-kitten/components';
import { connect, useSelector } from 'react-redux';
import { Background, Container, AutoCompleteView } from './styles';


const tam = Dimensions.get('window').width;

const iphone =  Platform.OS === 'ios';
function Search() {
  
  const [value, setValue] = useState(null);
  const [data, setData] = useState(useSelector(state => state.seriesReducer.series));
  const [data_initial] = useState(useSelector(state => state.seriesReducer.series));
 
  const renderResult = (thumb) => {
    return (
      setImage(thumb)
    )
  }

  const  renderItem = ({item,index})=> {
    return(
      <View style={{flexDirection: 'row', marginLeft:20, marginVertical:10, alignItems: 'center', width: tam-50, borderBottomColor: '#99a0aa'}}>
        <Image source={{uri: item.thumb}} style={{width: 50, height: 50, borderRadius:100}} />        
        <Text style={{color: '#99a0aa', fontWeight:'bold', fontSize:15, textAlign: 'center', marginLeft: 10,}}>{item.title}</Text>
      </View>
    )
  }

  // const onSelect = ({ title, thumb }) => {
  //   setValue(title);
  //   renderResult(thumb);
  // };

  const onChangeText = (query, thumb, title) => {

    setValue(query);
    setData(data_initial.filter(item => item.title.toLowerCase().includes(query.toLowerCase())));

  };

  return (
    <Background>
    
    <Container>
      <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold', marginLeft:20}}>Series</Text>
      <TextInput
        placeholder={'Buscar'}
        returnKeyType= 'done'
        placeholderTextColor={'#99a0aa'}
        style={{ width: '90%', backgroundColor: '#1c1c1e', marginTop:10, marginHorizontal:20, height: 50, borderRadius:10, padding: 16, color: '#99a0aa' }}
        onChangeText={onChangeText}
        value={value}
      />
       <FlatList
                data={data}
                keyExtractor={(item) => item.id} renderItem={renderItem}
      />
      {/* <AutoCompleteView style={{margin:20}}>
      <Autocomplete 
          style={{backgroundColor: '#1c1c1e', borderRadius:8, borderWidth: 0, borderColor: '#1c1c1e', textShadowColor: '#fff'}}
          placeholder='Buscar séries'
          value={value}
          size='medium'
          data={data}
          onChangeText={onChangeText}
          onSelect={onSelect}
        />
      </AutoCompleteView> */}
      {/* {data_image_select && data_image_select !== null ? (
        <Image source={{uri:data_image_select}} resizeMode= 'contain' style={{height: 350, width: 240, borderRadius: 10, marginTop: 20, borderWidth: 2, borderColor: 'white'}}/>
      ):null} */}
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