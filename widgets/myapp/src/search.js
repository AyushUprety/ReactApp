import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search =()=>{
    const[ Term, setTerm]=useState('programming');
    const[Result, setResult]=useState([]);
    console.log(Result);

   useEffect(()=>{
       const search = async ()=>{
           const {data} = await axios.get('https://en.wikipedia.org//w/api.php',{
               params: {
                    action: 'query',
                    list:'search',
                    origin:'*',
                    format: 'json',
                    srsearch:Term,
                    
               }    
           })
           setResult(data.query.search);


       }
       search();
       console.log(Result);
    
   },[Term])

    return (
        <div>
            <form class="ui segment container ">
                <div class="field">
                    <label>Enter the Term to Search:</label>
                    <input type="data" name="search" onChange={(e)=>{setTerm(e.target.value)}}></input>
                </div>
            </form>    
        </div>
    )
   
}
export default Search;