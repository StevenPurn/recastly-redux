var searchYouTube = ({key, query, max = 5}) => {
  return $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  });
};

export default searchYouTube;
