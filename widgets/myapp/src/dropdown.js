import React,{ useState,useEffect} from 'react'

const Dropdown = ({options,changeOption,Selected})=>{
    const[open,setOpen]=useState(false);
    
useEffect(()=>{
    document.body.addEventListener('click',()=>{
        setOpen(false);
    },{capture:true})
},[])

    
    const renderedOptions = options.map(
        (option)=>{
            if(Selected===option.label){
                return null;
            }  
            return(
                <div onClick={()=>changeOption(option.label)} key={option.value} className="item">
                    {option.label}
                </div>
            )
        
        }
    )
    return(
       <div className="ui form">
           <div className="field">
               <label className="label">Select a color</label>
               <div 
                    onClick={()=>setOpen(!open)} 
                    className={`ui selection dropdown ${open?'visible active':''}`} >
                   <i className='dropdown icon'></i>
                   <div className="text">{Selected}</div>
                   <div className={`menu ${open?'visible transition':''}`}>
                       {renderedOptions}
                   </div>
           </div>
       </div>
    </div>
    )
}
export default Dropdown;