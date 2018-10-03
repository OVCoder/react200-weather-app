import {connect} from 'react-redux';
import SearchField from './SearchField';

//This function takes the store and returns an object
//that's passed to the props of the component.
function mapStoreToProps(store){
  return{
    searchCity: store.search.searchCity,
    // searchCity: store.search.cityList
  }
}

export default connect(mapStoreToProps)(SearchField);