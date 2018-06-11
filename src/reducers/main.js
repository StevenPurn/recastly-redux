import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';
import search from './search.js';

var rootReducer = (state = { videoList: [], currentVideo: null }, action) => {
  return combineReducers({
    currentVideo: currentVideo,
    videoList: videoList
  });
};

export default combineReducers({
  currentVideo: currentVideo,
  videoList: videoList,
});
