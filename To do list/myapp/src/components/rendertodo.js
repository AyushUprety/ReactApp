import React from 'react';

const display = (props)=>{
    const{items,setItems}=props;
    console.log({items});
    return(
        <div>
            {items.map((item,index)=>{
            return(
                <li key={`item${index}`}>{item}</li>
            )
            })}
        </div>
    )
}
export default display;