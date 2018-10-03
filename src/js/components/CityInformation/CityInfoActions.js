// Below are Action Creators

export function displayCurrentCity(city){
  return{
    type:'DISPLAY_CURRENT_CITY',
    payload: {currentCity:city}
  };
}