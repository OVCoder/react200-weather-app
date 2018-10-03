import {connect} from 'react-redux';
import CityInformation from './CityInformation';

//This function takes the store and returns an object
//that's passed to the props of the component.
function mapStoreToProps(store){
  return{
    currentCity: store.search.searchCity,
    temp: store.search.temp,
    pressure: store.search.pressure,
    humidity: store.search.humidity,
    lowTemp: store.search.temp_min,
    highTemp: store.search.temp_max,
    windSpeed: store.search.windSpeed
  }
}

export default connect(mapStoreToProps)(CityInformation);