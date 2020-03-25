import React, {useState, useEffect} from 'react'
import {View, Text} from 'react-native'
import {Layout,Select} from '@ui-kitten/components'
import { connect, useSelector } from 'react-redux'
import {Background, Container, ImgPoster, Infos, TextName, TextSeason,
     FlatListEpisodes, ViewItem,ViewEps, ViewRowInfo,ImageEpisode, TextInfo} from './styles'

const Details = ({route, navigation}) => {
  const { itemId } = route.params;

  const [series] = useState(useSelector(state => state.seriesReducer.series));
  const [episodes] = useState(useSelector(state => state.episodesReducer.episodes));
  const [seasonEpisodes,setSeasonEpisodes] = useState(useSelector(state => state.episodesReducer.episodes));

  const [selectedOption, setSelectedOption] = useState(2);
  const found = series.find(element => element.id === itemId);
  const num_seasons = found.season;
  const aux = [{text: 'Todos os episódios', id:0}];
  
  var iterator = 1;
  while(iterator<=num_seasons){
    aux.push({text: `${iterator}ª temporada`,id:iterator})
    iterator++;
  }

  const handleSelect = (index) => {
    if(index.id===0){
      setSeasonEpisodes(episodes)
    }else{
      setSeasonEpisodes(episodes.filter(item=> item.season === index.id))
    }
  }
  
  const  renderItem = ({item,index})=> {
    return(
      <ViewItem key={index}>
        {item.eps.map((teste,index)=>{
            return (
              <ViewRowInfo>
                  <ImageEpisode source={{uri: teste.thumb}} />
                  <ViewEps key={index}>
                    <TextSeason style={{color: 'white', fontWeight:'bold'}}>{teste.aired}</TextSeason>
                    <TextInfo>{teste.name}</TextInfo>
                    <TextInfo>{teste.released}</TextInfo>
                  </ViewEps>
              </ViewRowInfo>
            )
        })}
      </ViewItem>
    )
  }

  return (
    <Background>
      <Container>
        <ImgPoster source={{uri:found.poster}}/>
        <Infos>
              <TextName>{found.title}</TextName>
              <TextSeason>{found.season} temporadas</TextSeason>
              <Layout style={{minWidth: 200, borderRadius:10,marginTop:10}}>
                <Select
                  data={aux}
                  size='medium'                 
                  placeholder={'Todos os episódios'}
                  selectedOption={selectedOption}
                  onSelect={handleSelect.bind(this)}
                />
              </Layout>
              <FlatListEpisodes
                data={seasonEpisodes}
                keyExtractor={(item) => item.season} renderItem={renderItem}
              />
            </Infos>
      </Container>
    </Background>
  )
}

const mapStateToProps = (state) => ({
  series: state.seriesReducer.series,
  episodes: state.episodesReducer.episodes
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)
