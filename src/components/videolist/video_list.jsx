import React from 'react';
import Videoitem from '../videoitem/video_item';
import styles from './video_list.module.css';

const Videolist = ({videos, onVideoClick, display}) => {
    console.log(display);
    
    
    return (
    <ul className={styles.videos}> 
       {videos && videos.map(video => (
        <Videoitem key={video.id} video={video} 
        onVideoClick={onVideoClick} 
        display={display} 
        />
       ))} 
    </ul>

    )};

export default Videolist;