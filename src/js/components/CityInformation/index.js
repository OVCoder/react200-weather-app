import {connect} from 'react-redux';
import CityInformation from './CityInformation';

//This function takes the store and returns an object
//that's passed to the props of the component.
function mapStoreToProps(store){
  return{
    // searchCity: store.search.searchCity
  }
}

export default connect(mapStoreToProps)(CityInformation);