import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';
import ReduxThunk from 'redux-thunk';

var VideoListContainer = () => {};

const mapStateToProps = state => {
  return {
    videos: state.videoList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleVideoListEntryTitleClick: (video) => dispatch({
      type: 'CHANGE_VIDEO',
      video: video
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
