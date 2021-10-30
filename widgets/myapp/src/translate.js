import React from 'react';
import {useState} from 'react'
import Dropdown from './dropdown';

const options=[
    {
        label:'Afrikans',
        value:'af'
    },
    {
        label:'Arabic',
        value:'ar'
    },
    {
        label:'Hindi',
        value:'hi'
    }
]
const Translate =()=>{
   
   
    const [selected,changeSelected]=useState(options[0].label);
    return(
        <div>
             <Dropdown Selected={selected} changeOption={changeSelected} options={options} />
        </div>
    )
     
}
export default Translate;