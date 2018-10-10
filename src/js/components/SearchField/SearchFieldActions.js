import axios from 'axios';  

//Below are Action Creators

export function updateSearchField (city){
  console.log(city, "this is CITY from UPDATEsEARCHfield action creator")
  return{
    type:'UPDATE_SEARCH_CITY',
    payload: {searchCity: city}
  };
} 

export function searchWeather(cityName){
  var cityForURI=encodeURIComponent(cityName);
  var APIkey = 'ecbc904cd7e9115de1813beb1cb5b058';
  axios.get('https://api.openweathermap.org/data/2.5/weather?q='+ cityForURI +'&units=imperial&APPID='+APIkey)
  .then((response) => {console.log(response.data)})
  
  return{
    type: 'SEARCH_WEATHER',
    payload:
      axios.get('https://api.openweathermap.org/data/2.5/weather?q='+ cityForURI +'&units=imperial&APPID='+APIkey)
      .then(response => response.data)
         
      //  console.log(response.data.main.temp,"temp",
                        // response.data.main.pressure,"pressure", 
                        // response.data.main.humidity,"humidity",
                        // response.data.main.temp_min, "temp_min",
                        // response.data.main.temp_max,"temp_max ",
                        // response.data.wind.speed,"windSpeed ",
                        // response.data.name, "CITY NAME",
                        // "!!! this is RESPONSE.DATA")
  }
}

// export function createSearchHistory(city){
//  return {
//    type: 'SEARCH_HISTORY',
//    payload: {searchCity: city, date: '01/01/2018', time: '12:30:08'}
//  } 
// }
