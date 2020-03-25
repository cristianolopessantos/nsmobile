import { combineReducers } from 'redux';
import seriesReducer from './seriesReducer';
import episodesReducer from './episodesReducer';

const rootReducer = combineReducers({
  seriesReducer,
  episodesReducer
})

export default rootReducer;
