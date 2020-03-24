import {getImages} from '../utils/images'

const initialState = {
  series: [
    {id:1, title: 'Arrow', season: 8, poster: getImages('ARROW_POSTER'), banner: getImages('ARROW_BANNER'), thumb: getImages('ARROW'), flag:'watching', genres: [{genre: 'action'}, {genre: 'adventure'}, {genre: 'crime'}, {genre: 'drama'}, { genre: 'science-fiction'}]},
    {id:2, title: 'Fear the walking dead', season:5, poster: getImages('FEAR_POSTER'), banner: getImages('FEAR_BANNER'), thumb: getImages('FEAR'), flag:'watching', genres: [{genre: 'drama'}, {genre: 'horror'}, {genre: 'science-fiction'}, {genre: 'suspense'}, { genre: 'thriller'}]},
    {id:3, title: 'Rick and morty', season: 4, poster: getImages('RICK_POSTER'), banner: getImages('RICK_BANNER'), thumb: getImages('RICK'), flag:'watching', genres: [{genre: 'adventure'}, {genre: 'animation'}, {genre: 'science-fiction'}, {genre: 'comedy'}]},
    {id:4, title: 'Pose', season:2, poster: getImages('POSE_POSTER'), banner: getImages('POSE_BANNER'), thumb: getImages('POSE'), flag:'watching', genres: [{genre: 'drama'}]},
    {id:5, title: 'Brooklyn Nine Nine', season: 7, poster: getImages('NINE_POSTER'), banner: getImages('NINE_BANNER'), thumb: getImages('NINE'), flag:'watching', genres: [{genre: 'action'}, {genre: 'comedy'}, {genre: 'crime'}]},
    {id:6, title: 'The outsider', season: 1, poster: getImages('OUTSIDER_POSTER'), banner: getImages('OUTSIDER_BANNER'), thumb: getImages('OUTSIDER'), flag:'watching', genres: [{genre: 'crime'}, {genre: 'drama'}, {genre: 'mini-series'}, {genre: 'suspense'}, { genre: 'thriller'}]},
    {id:7, title: 'Game of thrones', season: 8, poster: getImages('GOT_POSTER'), banner: getImages('GOT_BANNER'), thumb: getImages('GOT'), flag:'recomends', genres: [{genre: 'adventure'}, {genre: 'drama'}, {genre: 'fantasy'}]},
    {id:8, title: 'The walking dead', season: 10, poster: getImages('TWD_POSTER'), banner: getImages('TWD_BANNER'), thumb: getImages('TWD'), flag:'recomends', genres: [{genre: 'adventure'}, {genre: 'drama'}, {genre: 'horror'}, {genre: 'thriller'}]},
    {id:9, title: 'Chernobyl', season: 1, poster: getImages('CHERNOBYL_POSTER'), banner: getImages('CHERNOBYL_BANNER'), thumb: getImages('CHERNOBYL'), flag:'recomends', genres: [{genre: 'drama'}, {genre:'mini-series'}]},
    {id:10, title: 'Altered Carbon', season: 2, poster: getImages('CARBON_POSTER'), banner: getImages('CARBON_BANNER'), thumb: getImages('CARBON'), flag:'recomends', genres: [{genre: 'action'}, {genre: 'drama'}, { genre: 'science-fiction'}, { genre: 'thriller'}]},
    {id:11, title: 'Hunters', season: 1, poster: getImages('HUNTERS_POSTER'), banner: getImages('HUNTER_BANNER'), thumb: getImages('HUNTERS'), flag:'recomends', genres: [{genre: 'crime'}, {genre: 'drama'}]},
    {id:12, title: 'Better call saul', season: 5, poster: getImages('BETTER_POSTER'), banner: getImages('BETTER_BANNER'), thumb: getImages('BETTER'), flag:'popular', genres: [{genre: 'crime'}, { genre: 'drama'}]},
    {id:13, title: 'Westworld', season: 3, poster: getImages('WEST_POSTER'), banner: getImages('WEST_BANNER'), thumb: getImages('WEST'), flag:'popular', genres: [{genre: 'adventure'}, {genre: 'drama'}, { genre: 'science-fiction'}, { genre: 'western'}]},
    {id:14, title: 'Grey`s Anatomy', season: 16, poster: getImages('GREYS_POSTER'), banner: getImages('GREYS_BANNER'), thumb: getImages('GREYS'), flag:'popular', genres: [{genre: 'drama'},{genre: 'romance'}, {genre: 'soap'}]},
    {id:15, title: 'Vikings', season: 6, poster: getImages('VIKINGS_POSTER'), banner: getImages('VIKINGS_BANNER'), thumb: getImages('VIKINGS'), flag:'popular', genres: [{genre: 'action'}, {genre: 'drama'}]},
    {id:16, title: 'Supernatural', season: 15, poster: getImages('SUPERNATURAL_POSTER'), banner: getImages('SUPERNATURAL_BANNER'), thumb: getImages('SUPERNATURAL'), flag:'popular', genres: [{genre: 'action'},{genre: 'drama'}, {genre: 'fantasy'}]},
    {id:17, title: 'The handmaid`s tale', season: 3, poster: getImages('HANDMA_POSTER'), banner: getImages('HANDMA_BANNER'), thumb: getImages('HANDMA'), flag:'suspense', genres: [{genre: 'drama'}]},
    {id:18, title: 'Outlander', season: 5, poster: getImages('OUTLANDER_POSTER'), banner: getImages('OUTLANDER_BANNER'), thumb: getImages('OUTLANDER'), flag:'suspense', genres: [{genre: 'adventure'}, {genre:'drama'}, {genre: 'fantasy'}, {genre: 'romance'}]},
    {id:19, title: 'Homeland', season: 8, poster: getImages('HOMELAND_POSTER'), banner: getImages('HOMELAND_BANNER'), thumb: getImages('HOMELAND'), flag:'suspense', genres: [{genre: 'action'}, {genre: 'crime'}, {genre: 'drama'}, {genre: 'suspense'}]},
    {id:20, title: 'Stranger', season: 4, poster: getImages('STRANGER_POSTER'), banner: getImages('STRANGER_BANNER'), thumb: getImages('STRANGER'), flag:'suspense', genres: [{genre: 'adventure'}, {genre: 'drama'}, {genre: 'fantasy'}, {genre: 'horror'}, { genre: 'suspense'}]},
    {id:21, title: 'Killing eve', season: 3, poster: getImages('KILLING_POSTER'), banner: getImages('KILLING_BANNER'), thumb: getImages('KILLING'), genres:[{genre:'action'}, {genre: 'adventure'}, {genre: 'drama'}, {genre: 'thriller'}]},
    {id:22, title: 'Riverdale', season: 4, poster: getImages('RIVERDALE_POSTER'), banner: getImages('RIVERDALE_BANNER'), thumb: getImages('RIVERDALE'), genres:[{genre: 'crime'},{genre: 'drama'}, {genre: 'suspense'}]},
    {id:23, title: 'Sex education', season: 3, poster: getImages('SEX_POSTER'), banner: getImages('SEX_BANNER'), thumb: getImages('SEX'), genres:[{genre: 'comedy'}, {genre: 'drama'}]},
    {id:24, title: 'Breaking bad', season: 5, poster: getImages('BREAKING_POSTER'), banner: getImages('BREAKING_BANNER'), thumb: getImages('BREAKING'), genres:[{genre: 'crime'}, {genre: 'drama'},{genre: 'suspense'}, {genre: 'thriller'}]},
    {id:25, title: 'Supergirl', season: 5, poster: getImages('SUPERGIRL_POSTER'), banner: getImages('SUPERGIRL_BANNER'), thumb: getImages('SUPERGIRL'), genres:[{genre: 'action'}, {genre: 'adventure'}, {genre: 'drama'}, {genre: 'science-fiction'}]},
    {id:26, title: 'This is us', season: 4, poster: getImages('THISIS_POSTER'), banner: getImages('THISIS_BANNER'), thumb: getImages('THISIS'), genres:[{genre: 'drama'}]},
    {id:27, title: 'The leftovers', season: 3, poster: getImages('LEFTOVERS_POSTER'), banner: getImages('LEFTOVERS_BANNER'), thumb: getImages('LEFTOVERS'), genres:[{genre: 'drama'}, {genre: 'fantasy'}, {genre: 'suspense'}]},
    {id:28, title: 'American horror story', season: 9, poster: getImages('HORROR_POSTER'), banner: getImages('HORROR_BANNER'), thumb: getImages('HORROR'), genres:[{genre: 'drama'}, {genre: 'horror'}, {genre: 'thriller'}]},
    {id:29, title: 'American Crime Story', season: 3, poster: getImages('CRIME_POSTER'), banner: getImages('CRIME_BANNER'), thumb: getImages('CRIME'), genres:[{genre: 'crime'}, {genre: 'drama'}]},

  ],

  seriesBanner: [
    {id:30, title: 'Bojack Horseman', poster: getImages('BOJACK_POSTER'), banner: getImages('BOJACK_BANNER'), thumb: getImages('BOJACK_POSTER'), flag:'popular'},
    {id:31, title: 'The 100', poster: getImages('THE_HUNDRED_POSTER'), banner: getImages('THE_HUNDRED_BANNER'), thumb: getImages('THE_HUNDRED_POSTER'), flag:'suspense'},
    {id:32, title: 'Scandal', poster: getImages('SCANDAL_POSTER'), banner: getImages('SCANDAL_BANNER'), thumb: getImages('SCANDAL_POSTER'), flag:'watching'},
    {id:33, title: 'How to get away with murder', poster: getImages('HTGWM_POSTER'), banner: getImages('HTGWM_BANNER'), thumb: getImages('HTGWM_POSTER'), flag:'watching'},
    {id:34, title: 'Moder family', poster: getImages('MODERN_FAMILY_POSTER'), banner: getImages('MODERN_BANNER'), thumb: getImages('MODERN_POSTER'), flag:'recomends'},
    {id:35, title: 'Supergirl', poster: getImages('SUPERGIRL_POSTER'), banner: getImages('SUPERGIRL_BANNER'), thumb: getImages('SUPERGIRL_POSTER'), flag:'recomends'},
    {id:36, title: 'Sex education', poster: getImages('SEX_POSTER'), banner: getImages('SEX_BANNER'), thumb: getImages('SEX_POSTER'), flag:'recomends'},
    {id:37, title: `Grey's Anatomy`, poster: getImages('GREYS_POSTER'), banner: getImages('GREYS_BANNER'), thumb: getImages('GREYS_POSTER'), flag:'recomends'},
    {id:37, title: `Rick and morty`, poster: getImages('RICK_POSTER'), banner: getImages('RICK_BANNER'), thumb: getImages('RICK_POSTER'), flag:'recomends'},
  ]
}

const seriesReducer = (state= initialState) => {
  return state;
}

export default seriesReducer;