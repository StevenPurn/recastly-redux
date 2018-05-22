var changeVideoList = (videos) => ({
  //TODO:  Return some action object to change the list of videos in VideoList.
  action: 'CHANGE_VIDEO_LIST',
  payload: {
    videos: videos
  }
});

export default changeVideoList;
