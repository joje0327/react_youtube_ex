import React from 'react';
import styles from './video_item.module.css';

const Videoitem = ({video,video:{snippet}, onVideoClick, display}) => {
    const displayType = (display==='list') ? styles.list : styles.grid;
    console.log(display);
    return (
        <li className={`${styles.container} ${displayType}`} onClick={() => onVideoClick(video)}>
            <div className={styles.video}>
            <img className={styles.thumbnail} 
            src={snippet.thumbnails.medium.url} 
            alt="video thumnail" 
            />
            <div className={styles.metadata}>
                <p className={styles.title}>{snippet.title}</p>
                <p className={styles.channel}>{snippet.channelTitle}</p>
            </div>
            </div>

        </li>

    );
};

export default Videoitem;