import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search =()=>{
    const[ term, setTerm]=useState('');

   useEffect(()=>{
       const text = async ()=>{
           await axios.get('https://en.wikipedia.org//w/api.php',{
               params: {
                    action: 'query',
                    list:'search',
                    origin:'*',
                    
               }    
           })
       }
       text();
   },[term])

    return (
        <div>
            <form class="ui form">
                <div class="field">
                    <label>Enter the term to Search:</label>
                    <input type="text" name="search" onChange={(e)=>{setTerm(e.target.value)}}></input>
                </div>
            </form>    
        </div>
    )
   
}
export default Search;