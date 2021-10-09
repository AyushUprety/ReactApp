import React from 'react';
import QA from './QA';
import Search from './search'

const App=()=>
{
    const items = [
        { 
            title:'What is React?',
            description:'React is a front end library'
        },
        { 
            title:'Why use React?',
            description:'React is a favourite js library among engineers'
        },
        { 
            title:'How do you use React',
            description:'You use react by creating componenets'
        }
    ]
    return(
        <Search/>

    )
}
export default App;