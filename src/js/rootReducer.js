import {combineReducers} from 'redux';
import SearchFieldReducer from './components/SearchField/SearchFieldReducer';

const rootReducer = combineReducers({
  search: SearchFieldReducer
});

export default rootReducer;
