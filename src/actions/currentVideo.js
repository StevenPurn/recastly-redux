var changeVideo = (video) => ({
  //TODO:  Return some action object to change the currently playing video.
  action: 'CHANGE_VIDEO',
  payload: {
    currentVideo: video 
  }
});

export default changeVideo;
