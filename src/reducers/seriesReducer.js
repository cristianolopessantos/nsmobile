import {getImages} from '../utils/images'

const initialState = {
  series: [
    {id:1, name: 'Arrow', thumb: getImages('ARROW'), flag:'watching'},
    {id:2, name: 'Fear the walking dead', thumb: getImages('FEAR'), flag:'watching'},
    {id:3, name: 'Rick and morty', thumb: getImages('RICK'), flag:'watching'},
    {id:4, name: 'Pose', thumb: getImages('POSE'), flag:'watching'},
    {id:5, name: 'Brooklyn Nine Nine', thumb: getImages('NINE'), flag:'watching'},
    {id:6, name: 'Outsider', thumb: getImages('OUTSIDER'), flag:'watching'},
    {id:7, name: 'Game of thrones', thumb: getImages('GOT'), flag:'recomends'},
    {id:8, name: 'The walking dead', thumb: getImages('TWD'), flag:'recomends'},
    {id:9, name: 'Chernobyl', thumb: getImages('CHERNOBYL'), flag:'recomends'},
    {id:10, name: 'Altered Carbon', thumb: getImages('CARBON'), flag:'recomends'},
    {id:11, name: 'Hunters', thumb: getImages('HUNTER'), flag:'recomends'},
    {id:12, name: 'Better call saul', thumb: getImages('BETTER'), flag:'popular'},
    {id:13, name: 'Westworld', thumb: getImages('WEST'), flag:'popular'},
    {id:14, name: 'Grey`s Anatomy', thumb: getImages('GREYS'), flag:'popular'},
    {id:15, name: 'Vikings', thumb: getImages('VIKINGS'), flag:'popular'},
    {id:16, name: 'Supernatural', thumb: getImages('SUPERNATURAL'), flag:'popular'},
    {id:17, name: 'The handmaid`s tale', thumb: getImages('HANDMA'), flag:'suspense'},
    {id:18, name: 'Outlander', thumb: getImages('OUTLANDER'), flag:'suspense'},
    {id:19, name: 'Homeland', thumb: getImages('HOMELAND'), flag:'suspense'},
    {id:20, name: 'Stranger', thumb: getImages('STRANGER'), flag:'suspense'},
  ],

  seriesBanner: [
    {id:21, name: 'Bojack Horseman', thumb: getImages('BOJACK_POSTER'), flag:'popular'},
    {id:22, name: 'The 100', thumb: getImages('THE_HUNDRED_POSTER'), flag:'suspense'},
    {id:23, name: 'Scandal', thumb: getImages('SCANDAL_POSTER'), flag:'watching'},
    {id:24, name: 'How to get away with murder', thumb: getImages('HTGWM_POSTER'), flag:'watching'},
    {id:25, name: 'Moder family', thumb: getImages('MODERN_FAMILY_POSTER'), flag:'recomends'},
  ]
}

const seriesReducer = (state= initialState) => {
  return state;
}

export default seriesReducer;