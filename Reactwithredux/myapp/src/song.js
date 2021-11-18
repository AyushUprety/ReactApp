import React from 'react';
import SongDetails from './songdetail';

const Song=({title,length})=>{
    
    return (
        <div>
            {title}
            <button>Select</button>
            <SongDetails title={title} length={length}/>
        </div>
        
    )
}
export default Song;