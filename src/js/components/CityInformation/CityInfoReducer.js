const defaultState = {
  currentCity:'none',
  temp:'65.62F',
  pressure: '997',
  humidity: '40%',
  lowTemp: '62.01F',
  highTemp: '71.01F',
  windSpeed:'24.16mph'
};

export default function CityInfoReducer (state = defaultState, action){
  const {type, payload} = action;

  switch (type){
    case 'DISPLAY_CURRENT_CITY' : {
      //will return an object
      return{
        ...state,
        //but overwriting currentCity
        currentCity: payload.currentCity
      };
    }
    default:{
      return state;
    }
  }
}