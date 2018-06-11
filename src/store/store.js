import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import data from './../data/exampleVideoData.js';

const initialState = {
  currentVideo: data[0],
  videoList: data,
  searchTerm: null,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;
