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
    payload: {searchCity: 'San Diego'}
  };
}
export function searchNewYorkWeather (){
  return{
    type: 'SEARCH_NEW_YORK_WEATHER',
    payload: {searchCity: 'New York'}
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