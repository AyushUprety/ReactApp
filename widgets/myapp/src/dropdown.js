import React,{ useState,useEffect,useRef} from 'react'

const Dropdown = ({options,changeOption,Selected,language})=>{
    const[open,setOpen]=useState(false); // initialized open to false 
    const ref = useRef();
    
useEffect(()=>{
    document.body.addEventListener('click',(event)=>{   // adding custom event listener in body so that dropdown could be closed by clicking outside the dropdown
        console.log(event.target);
        if(ref.current && ref.current.contains(event.target)){
            return;
        }
        setOpen(false);
    },{capture:true})     // new version of react demands this line of code
})

    
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
       <div className="ui form" ref={ref}>
           <div className="field">
               <label className="label">{language}</label>
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