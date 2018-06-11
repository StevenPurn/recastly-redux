import Redux from 'redux';

var searchReducer = (state = [], action) => {
  switch (action.type) {
  case 'SEARCH_VIDEO':
    return action.searchTerm;
  default:
    return state;
  }
};

export default searchReducer;
