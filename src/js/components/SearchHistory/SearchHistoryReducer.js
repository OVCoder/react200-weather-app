const defaultState = {
  searchHistoryCity1: '',
  searchHistoryCity2: '',
  searchHistoryCity3: '',
  searchHistoryCity4: '',
  searchHistoryCity5: '',
  searchHistoryList: []
};

export default function SearchHistoryReducer (state = defaultState, action) {
  const {type, payload} = action;

  switch (type) {
    case 'SEARCH_HISTORY_CITY1_UPDATE' : {
      //will return an object
      return{
        ...state,
        //but overwriting searchHistoryCity1
        searchHistoryCity1: payload.searchHistoryCity1
      };
    }
    default: {
      return state;
    }
  }
}