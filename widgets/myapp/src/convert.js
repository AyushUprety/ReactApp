import axios from "axios";
import React,{useState, useEffect} from "react";

const Convert = ({selected,text})=>{
    useEffect(()=>{
        axios.post('https://translation.googleapis.com/language/translate/v2',{},{
            params:{
                q:text,
                target:selected, 
                key:'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
            }
        })
    },[selected,text])
    return <div/>
}

export default Convert;