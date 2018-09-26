const defaultState = {
  searchCity: ''
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
    case 'SEARCH_SAN_DIEGO_WEATHER' : {
      return{
        ...state,
        searchCity: payload.searchCity
      };
    }
    case 'SEARCH_NEW_YORK_WEATHER' : {
      return{
        ...state,
        searchCity: payload.searchCity
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