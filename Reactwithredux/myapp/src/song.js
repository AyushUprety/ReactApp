/** Here I have am trying to display description of song when the button is clicked. The problem is that
   I cannot figure out how to do it. First I have tried to implement it using showdetail function
   but to no avail, I couldnot return component from inside the function.At first I was thinking 
   of making seperate component for description but later decided to use state thanks to  stackoverflow.
   Lets use useEffect function then.
*/

import React, { useEffect } from 'react';
import SongDetails from './songdetail';
import {useState} from 'react';

const Song=({title,length})=>{
    const[title,updatetitle]=useState(false);
    // const showdetail =(title)=>{
    //     if(title===true){
    //         return </SongDetails>
    //     } 
    //     return
    // }
   useEffect(()=>{
       updatetitle(true);
   },[title])
    return (
        <div>
            {title}
            <button onClick={updatetitle(true)}>Select</button>
            <SongDetails title={title} length={length}/>
        </div>
        
    )
}
export default Song;