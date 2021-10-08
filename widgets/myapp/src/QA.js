import React,{ useState } from 'react';

const Widget = ({Items})=>{
    const [activeIndex,setIndex]=useState(null); // set starting index value to null and setIndex is an update variable
    
    const displayindex= (index)=>{
        setIndex(index);
    }
    const renderesList = Items.map((item,index) =>{
        const active = index===activeIndex?'active':'';
    return (
        <div className="ui styled accordion" key={item.title}>
            <div className={`${active} title`} onClick={()=>{displayindex(index)}}>
                <i className="dropdown icon"></i>
                    {item.title}
            </div>
                <div className={`${active} content`}>
                    <p>{item.description}</p>
            </div>
       </div> 
    
    )
    })
    return (
       <div>{renderesList}</div>
    )
}
export default Widget;