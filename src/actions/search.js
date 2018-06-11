import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import ReduxThunk from 'redux-thunk';


const doSearch = () => {
  return {
    type: 'FETCHED_VIDEO'
  };
};


var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!

  // "should return an object with a "videos" key equal to the videos parameter"
  let url = 'https://www.googleapis.com/youtube/v3/search';

  return (dispatch) => {
    dispatch(doSearch());
    return $.ajax({
      context: this,
      url: url,
      method: 'GET',
      data: {
        part: 'snippet,id',
        key: YOUTUBE_API_KEY,
        q: q,
        maxResults: 5,
        type: 'video',
        videoEmbeddable: 'true'
      },
      success: function(data) {
        dispatch({type: 'SEARCH_VIDEO', videos: data.items});
      }
    });
  };
};



export default handleVideoSearch;