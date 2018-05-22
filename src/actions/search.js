import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  const params = {
    key: YOUTUBE_API_KEY,
    query: q
  };
  searchYouTube(params)
    .then((data) => {
      return {
        action: 'SEARCH_VIDEO',
        payload: {
          data: data,
        },
      };
    })
    .catch(err => {
      console.log(err);
    });
};

export default handleVideoSearch;
