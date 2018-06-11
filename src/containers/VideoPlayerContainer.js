import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';
import ReduxThunk from 'redux-thunk';

var VideoPlayerContainer = () => {};

const mapStateToProps = state => {
  return {
    video: state.currentVideo
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps)(VideoPlayer);
