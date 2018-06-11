import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import ReduxThunk from 'redux-thunk';

var handleVideoSearch = (q) => {
  return (dispatch) => {
    searchYouTube({key: YOUTUBE_API_KEY, query:q}, (data) => {
      dispatch(changeVideoList(data));
      return data;
    });
  };
};

export default handleVideoSearch;
