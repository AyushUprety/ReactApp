import React from 'react';

const Video = (props) => {
    return (
        <div>
            <img src={props.videos.snippet.thumbnails.medium.url}/>
            {props.videos.snippet.title}
        </div>
    )
}
 export default Video;
