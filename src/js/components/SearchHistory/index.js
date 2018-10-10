import {connect} from 'react-redux';
import SearchHistory from './SearchHistory';

//This function takes the store and returns an object
//that's passed to the props of the component.
function mapStoreToProps(store){
  return{
    searchCity: store.search.searchCity,
    date: store.search.date,
    time: store.search.time,
    searchList: store.search.searchList
  }
}

export default connect(mapStoreToProps)(SearchHistory);