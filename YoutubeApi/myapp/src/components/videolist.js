import React from 'react';
import Video from './video'

const VideoList = (props)=>{
    const allVideo = props.Videos;
    const rendar=allVideo.map(video=>{
        return <Video videos={video}/>
    })
    return (
        <div className="ui segme container">   
            {props.Videos.length}
            {rendar}
        </div>
    )
}
export default VideoList;