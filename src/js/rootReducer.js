import {combineReducers} from 'redux';
import SearchFieldReducer from './components/SearchField/SearchFieldReducer';
import CityInfoReducer from './components/CityInformation/CityInfoReducer';

const rootReducer = combineReducers({
  search: SearchFieldReducer,
  cityInfo: CityInfoReducer
});

export default rootReducer;
