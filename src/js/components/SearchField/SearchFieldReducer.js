const defaultState = {
  searchCity: 'TEST ',
  temp: 0,
  pressure: 0,
  humidity: 0,
  temp_min: 0,
  temp_max: 0,
  windSpeed: 0
};

export default function SearchFieldReducer (state = defaultState, action){
  const {type, payload} = action;

  switch (type) {
    case 'UPDATE_SEARCH_CITY' : {
      // will return an object
      return{
        ...state,
        // but overwriting searchCity
        searchCity: payload.searchCity  
      };   
    }
    case 'SEARCH_SAN_DIEGO_WEATHER_FULFILLED' : {
      return{
        ...state,
        searchCity: payload.name,
        temp: payload.main.temp,
        pressure: payload.main.pressure,
        humidity: payload.main.humidity,
        temp_min: payload.main.temp_min,
        temp_max: payload.main.temp_max,
        windSpeed: payload.wind.speed
      };
    }
    case 'SEARCH_NEW_YORK_WEATHER' : {
      return{
        ...state,
        searchCity: payload.searchCity,
        temp: payload.temp
      };
    }
    case 'SEARCH_WASHINGTONDC_WEATHER' : {
      return{
        ...state,
        searchCity: payload.searchCity
      };
    }
    case 'SEARCH_LONDON_WEATHER' : {
      return{
        ...state,
        searchCity: payload.searchCity
      };
    }
    case 'SEARCH_TOKYO_WEATHER' : {
      return{
        ...state,
        searchCity: payload.searchCity
      };
    }
    default:{
      return state;
    }
  }
}