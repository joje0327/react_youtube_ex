import { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import Searchheader from './components/search_header/search_header';
import Videolist from './components/videolist/video_list';
import VideoDetail from './components/video_detail/video_detail';

function App({youtube}) {

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selecteVideo = (video) => {
    setSelectedVideo(video);
  }

  const search = useCallback(query => {
    youtube
    .search(query)
    .then(videos => {
      setVideos(videos);
      setSelectedVideo(null);
    })
  }, [youtube])


  useEffect(()=>{
    console.log('시작됨');
    youtube
    .mostPoppular()
    .then(videos => setVideos(videos));
  }, [youtube])

  return (
    <div className={styles.app}>
    <Searchheader onSearch={search}></Searchheader>
    <section className={styles.content}>
      {
        selectedVideo && 
        <div className={styles.detail}>
          <VideoDetail video={selectedVideo} />
        </div>
      }
      <div className={styles.list}>
        <Videolist
        videos = {videos}
        onVideoClick = {selecteVideo} 
        display = {selectedVideo ? 'list':'grid'}
        />
      </div>
    </section>
    </div>
  )
}

export default App;
