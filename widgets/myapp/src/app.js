import React from 'react';
import QA from './QA';
import Search from './search'
import Dropdown from './dropdown'

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
    const options = [
        { 
            label:'The Color Red',
            value:'red'
        },
        { 
            label:'The color green',
            value:'green'
        },
        {
            label:'The Color Blue',
            value:'blue'
        }
    ]
    return(
        <Dropdown/>

    )
}
export default App;