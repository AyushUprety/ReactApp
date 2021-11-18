import React from 'react';
import youtube from '../Apis/youtube';
import VideoList from './videolist'
import {useState} from 'react';


const Search = ()=>{
    const[state,updateState]=useState([]);
    const onFormSubmit=async(e)=>{
        e.preventDefault();
        console.log(e);
        const response = await youtube.get('/search',{
            params: {
                q:state
            }
        })
        console.log(response);
        updateState(response.data.items)

    }
    return(
        <div>
            <form onSubmit={onFormSubmit} className="ui container segment">
                <label htmlFor="search">Enter the search term:</label>
                <input type="text" id="search" name="search" ></input>
            </form>
                <VideoList Videos={state} />
        </div>
    )
}
    

export default Search;