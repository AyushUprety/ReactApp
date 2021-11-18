import React from 'react'

const SongDetails = ({title,length})=>{
    return(
        <div>
            <h1>Details for</h1>
            <p>Title:{title}</p>
            <p>Length:{length}</p>
        </div>
    )
}
export default SongDetails;