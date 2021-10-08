import React from 'react';
import './video.css';

const Video = (props) => {
 
    const title = (props)=>{
        return props.childfunction(props.videos)
    }
    
    return (
        <div onClick={title} className="Videos ui relaxed divided list">
            <div className="item">
                <img src={props.videos.snippet.thumbnails.medium.url}/>
            </div>
            <div className="item">
            <div class="description">{props.videos.snippet.title}</div>

            </div>
    
        </div>
    )
}
 export default Video;
