import React,{useState, useEffect} from "react";

const Convert = ({selected,text})=>{
    useEffect(()=>{
        console.log('language clicked')
    },[selected,text])
    return <div/>
}

export default Convert;