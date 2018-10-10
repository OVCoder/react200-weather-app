const defaultState = {
  searchCity: '',
  temp: 0,
  pressure: 0,
  humidity: 0,
  temp_min: 0,
  temp_max: 0,
  windSpeed: 0,
  date: 0,
  time: '',
  searchList: []
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
    case 'SEARCH_WEATHER_FULFILLED' : {
      var date = new Date();
      var months = ["01","02","03","04","05","06","07","08","09","10","11","12"];
      var currentDate = months[date.getMonth()]+'/'+date.getDate()+'/'+date.getFullYear();
      var minutes = date.getMinutes();
      function minuteDigits (minutesToBeChecked){
        if (minutesToBeChecked<10){
          minutes = "0"+ minutesToBeChecked;
        }
      }
      minuteDigits(minutes);
      var currentTime = date.getHours()+":"+ minutes +":"+date.getSeconds();
      console.log(currentDate,"THIS IS CURRENT DATE", currentTime, "THIS IS CURRENT TIME");
      
      var originalSearchList = state.searchList;
      console.log(originalSearchList);
      console.log(typeof(originalSearchList)); //object
      var newArray = [...originalSearchList];    //.slice();
      console.log(newArray);
      console.log(typeof(newArray)); //object
      var newSearchObject = {'searchCity': payload.name, 'date': currentDate, 'time': currentTime};
      console.log(typeof(newSearchObject)); //object
      newArray.push(newSearchObject);

      function keepListShort (newArray){
        if (newArray.length>5){
          var index = newArray.length - 5;
          console.log (index);
          newArray.splice(0, index);
        }
      }
      keepListShort(newArray);
      console.log(typeof(newArray)); //number
      console.log(newArray, "NEWARRAY");
      return{
        ...state,
        searchCity: payload.name,
        temp: payload.main.temp,
        pressure: payload.main.pressure,
        humidity: payload.main.humidity,
        temp_min: payload.main.temp_min,
        temp_max: payload.main.temp_max,
        windSpeed: payload.wind.speed,
        date: currentDate,
        time: currentTime,
        searchList: newArray
      };  
    }
    case 'SEARCH_WEATHER_REJECTED' : {
      return{
        ...state
      };
    }
    case 'SEARCH_HISTORY' :{
      return {
        ...state,
        searchList: [payload]
      };
    }
    default:{
      return state;
    }
  }
}