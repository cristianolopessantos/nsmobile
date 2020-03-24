import {getImages} from '../utils/images'

const initialState = {
  series: [
    {id:1, name: 'Arrow', season: 8, poster: getImages('ARROW_POSTER'), thumb: getImages('ARROW'), flag:'watching', genres: [{genre: 'action'}, {genre: 'adventure'}, {genre: 'crime'}, {genre: 'drama'}, { genre: 'science-fiction'}]},
    {id:2, name: 'Fear the walking dead', season:5, poster: getImages('FEAR_POSTER'), thumb: getImages('FEAR'), flag:'watching', genres: [{genre: 'drama'}, {genre: 'horror'}, {genre: 'science-fiction'}, {genre: 'suspense'}, { genre: 'thriller'}]},
    {id:3, name: 'Rick and morty', season: 4, poster: getImages('RICK_POSTER'), thumb: getImages('RICK'), flag:'watching', genres: [{genre: 'adventure'}, {genre: 'animation'}, {genre: 'science-fiction'}, {genre: 'comedy'}]},
    {id:4, name: 'Pose', season:2, poster: getImages('POSE_POSTER'), thumb: getImages('POSE'), flag:'watching', genres: [{genre: 'drama'}]},
    {id:5, name: 'Brooklyn Nine Nine', season: 7, poster: getImages('NINE_POSTER'), thumb: getImages('NINE'), flag:'watching', genres: [{genre: 'action'}, {genre: 'comedy'}, {genre: 'crime'}]},
    {id:6, name: 'The outsider', season: 1, poster: getImages('OUTSIDER_POSTER'), thumb: getImages('OUTSIDER'), flag:'watching', genres: [{genre: 'crime'}, {genre: 'drama'}, {genre: 'mini-series'}, {genre: 'suspense'}, { genre: 'thriller'}]},
    {id:7, name: 'Game of thrones', season: 8, poster: getImages('GOT_POSTER'), thumb: getImages('GOT'), flag:'recomends', genres: [{genre: 'adventure'}, {genre: 'drama'}, {genre: 'fantasy'}]},
    {id:8, name: 'The walking dead', season: 10, poster: getImages('TWD_POSTER'), thumb: getImages('TWD'), flag:'recomends', genres: [{genre: 'adventure'}, {genre: 'drama'}, {genre: 'horror'}, {genre: 'thriller'}]},
    {id:9, name: 'Chernobyl', season: 1, poster: getImages('CHERNOBYL_POSTER'), thumb: getImages('CHERNOBYL'), flag:'recomends', genres: [{genre: 'drama'}, {genre:'mini-series'}]},
    {id:10, name: 'Altered Carbon', season: 2, poster: getImages('CARBON_POSTER'), thumb: getImages('CARBON'), flag:'recomends', genres: [{genre: 'action'}, {genre: 'drama'}, { genre: 'science-fiction'}, { genre: 'thriller'}]},
    {id:11, name: 'Hunters', season: 1, poster: getImages('HUNTERS_POSTER'), thumb: getImages('HUNTERS'), flag:'recomends', genres: [{genre: 'crime'}, {genre: 'drama'}]},
    {id:12, name: 'Better call saul', season: 5, poster: getImages('BETTER_POSTER'), thumb: getImages('BETTER'), flag:'popular', genres: [{genre: 'crime'}, { genre: 'drama'}]},
    {id:13, name: 'Westworld', season: 3, poster: getImages('WEST_POSTER'), thumb: getImages('WEST'), flag:'popular', genres: [{genre: 'adventure'}, {genre: 'drama'}, { genre: 'science-fiction'}, { genre: 'western'}]},
    {id:14, name: 'Grey`s Anatomy', season: 16, poster: getImages('GREYS_POSTER'), thumb: getImages('GREYS'), flag:'popular', genres: [{genre: 'drama'},{genre: 'romance'}, {genre: 'soap'}]},
    {id:15, name: 'Vikings', season: 6, poster: getImages('VIKINGS_POSTER'), thumb: getImages('VIKINGS'), flag:'popular', genres: [{genre: 'action'}, {genre: 'drama'}]},
    {id:16, name: 'Supernatural', season: 15, poster: getImages('SUPERNATURAL_POSTER'), thumb: getImages('SUPERNATURAL'), flag:'popular', genres: [{genre: 'action'},{genre: 'drama'}, {genre: 'fantasy'}]},
    {id:17, name: 'The handmaid`s tale', season: 3, poster: getImages('HANDMA_POSTER'), thumb: getImages('HANDMA'), flag:'suspense', genres: [{genre: 'drama'}]},
    {id:18, name: 'Outlander', season: 5, poster: getImages('OUTLANDER_POSTER'), thumb: getImages('OUTLANDER'), flag:'suspense', genres: [{genre: 'adventure'}, {genre:'drama'}, {genre: 'fantasy'}, {genre: 'romance'}]},
    {id:19, name: 'Homeland', season: 8, poster: getImages('HOMELAND_POSTER'), thumb: getImages('HOMELAND'), flag:'suspense', genres: [{genre: 'action'}, {genre: 'crime'}, {genre: 'drama'}, {genre: 'suspense'}]},
    {id:20, name: 'Stranger', season: 4, poster: getImages('STRANGER_POSTER'), thumb: getImages('STRANGER'), flag:'suspense', genres: [{genre: 'adventure'}, {genre: 'drama'}, {genre: 'fantasy'}, {genre: 'horror'}, { genre: 'suspense'}]},
    {id:21, name: 'Killing eve', season: 3, poster: getImages('KILLING_POSTER'), thumb: getImages('KILLING'), genres:[{genre:'action'}, {genre: 'adventure'}, {genre: 'drama'}, {genre: 'thriller'}]},
    {id:22, name: 'Riverdale', season: 4, poster: getImages('RIVERDALE_POSTER'), thumb: getImages('RIVERDALE'), genres:[{genre: 'crime'},{genre: 'drama'}, {genre: 'suspense'}]},
    {id:23, name: 'Sex education', season: 3, poster: getImages('SEX_POSTER'), thumb: getImages('SEX'), genres:[{genre: 'comedy'}, {genre: 'drama'}]},
    {id:24, name: 'Breaking bad', season: 5, poster: getImages('BREAKING_POSTER'), thumb: getImages('BREAKING'), genres:[{genre: 'crime'}, {genre: 'drama'},{genre: 'suspense'}, {genre: 'thriller'}]},
    {id:25, name: 'Supergirl', season: 5, poster: getImages('SUPERGIRL_POSTER'), thumb: getImages('SUPERGIRL'), genres:[{genre: 'action'}, {genre: 'adventure'}, {genre: 'drama'}, {genre: 'science-fiction'}]},
    {id:26, name: 'This is us', season: 4, poster: getImages('THISIS_POSTER'), thumb: getImages('THISIS'), genres:[{genre: 'drama'}]},
    {id:27, name: 'The leftovers', season: 3, poster: getImages('LEFTOVERS_POSTER'), thumb: getImages('LEFTOVERS'), genres:[{genre: 'drama'}, {genre: 'fantasy'}, {genre: 'suspense'}]},
    {id:28, name: 'American horror story', season: 9, poster: getImages('HORROR_POSTER'), thumb: getImages('HORROR'), genres:[{genre: 'drama'}, {genre: 'horror'}, {genre: 'thriller'}]},
    {id:29, name: 'American Crime Story', season: 3, poster: getImages('CRIME_POSTER'), thumb: getImages('CRIME'), genres:[{genre: 'crime'}, {genre: 'drama'}]},

  ],

  seriesBanner: [
    {id:30, name: 'Bojack Horseman', poster: getImages('BOJACK_POSTER'), thumb: getImages('BOJACK_POSTER'), flag:'popular'},
    {id:31, name: 'The 100', poster: getImages('THE_HUNDRED_POSTER'), thumb: getImages('THE_HUNDRED_POSTER'), flag:'suspense'},
    {id:32, name: 'Scandal', poster: getImages('SCANDAL_POSTER'), thumb: getImages('SCANDAL_POSTER'), flag:'watching'},
    {id:33, name: 'How to get away with murder', poster: getImages('HTGWM_POSTER'), thumb: getImages('HTGWM_POSTER'), flag:'watching'},
    {id:34, name: 'Moder family', poster: getImages('MODERN_FAMILY_POSTER'), thumb: getImages('MODERN_FAMILY_POSTER'), flag:'recomends'},
    {id:35, name: 'Supergirl', poster: getImages('SUPERGIRL_POSTER'), thumb: getImages('SUPERGIRL_POSTER'), flag:'recomends'},
    {id:36, name: 'Sex education', poster: getImages('SEX_POSTER'), thumb: getImages('SEX_POSTER'), flag:'recomends'},
    {id:37, name: `Grey's Anatomy`, poster: getImages('GREYS_POSTER'), thumb: getImages('GREYS_POSTER'), flag:'recomends'},
    {id:37, name: `Rick and morty`, poster: getImages('RICK_POSTER'), thumb: getImages('RICK_POSTER'), flag:'recomends'},
  ]
}

const seriesReducer = (state= initialState) => {
  return state;
}

export default seriesReducer;