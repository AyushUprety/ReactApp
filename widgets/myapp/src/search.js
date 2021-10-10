import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search =()=>{
    const[ Term, setTerm]=useState('programming');
    const[Result, setResult]=useState([]);
    console.log(Result);

    const renderedResult = Result.map((result)=>{
        return (
            <div className="ui list key" key={result.pageid}>
                <div className="item">
                    <div className="content">
                        <a className="header">{result.title}</a>
                        <div className="description">
                            <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                        </div>
                    </div>
                </div>  
            </div>          
        )
    })

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
            <form classNameName="ui segment container ">
                <div classNameName="field">
                    <label>Enter the Term to Search:</label>
                    <input type="data" name="search" onChange={(e)=>{setTerm(e.target.value)}}></input>
                    <div>{renderedResult}</div>
                </div>
            </form>    
        </div>
    )
   
}
export default Search;