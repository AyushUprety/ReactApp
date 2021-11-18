import React from 'react';
import Video from './video'

const VideoList = (props)=>{
    const allVideo = props.Videos;
    const rendar=allVideo.map(video=>{
        return <Video videos={video}/>
    })
    const parentfunc=()=>{
        return props.videos.snippet.title
    }
    return (
        <div className="ui segment container">
            {props.Videos.length}
            <Video childfunction={parentfunc}/>
            {rendar}
        </div>
    )
}
export default VideoList;