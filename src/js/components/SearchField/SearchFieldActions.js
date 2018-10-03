import axios from 'axios';  

//Below are Action Creators


export function updateSearchField (city){
  return{
    type:'UPDATE_SEARCH_CITY',
    payload: {searchCity: city}
  };
} 

export function searchSanDiegoWeather (){
  return{
    type: 'SEARCH_SAN_DIEGO_WEATHER',
    payload: 
      axios.get('https://api.openweathermap.org/data/2.5/weather?q=San%20Diego&units=imperial&APPID=DELETED')
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
export function searchNewYorkWeather (){
  return{
    type: 'SEARCH_NEW_YORK_WEATHER',
    payload: {searchCity: 'New York',
              temp: 20}
  };
}
export function searchWashingtonDCWeather(){
  return{
    type: 'SEARCH_WASHINGTONDC_WEATHER',
    payload: {searchCity: 'Washington DC'}
  };
}
export function searchLondonWeather(){
  return{
    type: 'SEARCH_LONDON_WEATHER',
    payload: {searchCity: 'London'}
  };
}
export function searchTokyoWeather(){
  return{
    type: 'SEARCH_TOKYO_WEATHER',
    payload: {searchCity: 'Tokyo'}
  };
}
