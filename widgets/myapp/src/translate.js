//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

import React from 'react';
import {useState} from 'react'
import Dropdown from './dropdown';
import Convert from './convert';

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
    const [text,setText]=useState('')
    return(
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter the text to translate:</label>
                    <input value={text} onChange={(e)=>setText(e.target.value)}/>
                </div>
            </div>
             
             <Dropdown language="Select a Language" Selected={selected} changeOption={changeSelected} options={options} />
             <h3 className='ui header'>Output</h3>
             <Convert text={text} language={selected}/>
        </div>
    )
     
}
export default Translate;