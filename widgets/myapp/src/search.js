import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search =()=>{
    const[ Term, setTerm]=useState('');
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
                            <button
                             className="ui right floated button positive mini">
                                 <a href={`http://en.wikipedia.org/?curid=${result.pageid}`}>Right Floated</a>
                            </button>
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
       const timeoutid = setTimeout(()=>{
        if(Term){
            search();
        }
    },500)
       return ()=>{
               clearTimeout(timeoutid);
           }
       

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