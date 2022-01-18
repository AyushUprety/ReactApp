//return nagari ni console la ta result dekhayo
// aasti ko jasto anonymous function halnu parena. Taila line no 13 ma set
/** setItem property kasari use garna janinas. You wrote setItems(userInput).
 * What you were doing was replacing the array with item variable and not appending
 * the input to the todolist array.I donot want to display anything when nothing is 
 * typed in input field. But, I am having a problem.Problem was you were initiating the
 * state with empty string and condition ma you were checking if null. Another goal was to make input blank
 * when enter was pressed or butoon is clicked.I tried changing the input in line 30 but it was not rendering
 * What I was missing was a value property.State has nothing to do with rendering of from. When I set value to 
 * userInput in line 23,I got the required result.
 */

import React from "react";

const Add = (props) => {
  const{items,setItems,userInput,setUserInput,completed,setCompleted,filteredTodos,setFilteredTodos} = props;
  const getRandomId = () => {
    return Math.random() * 1000;
  }
  const statusHandler = (event)=>{
    console.log(event.target.value)
    setCompleted(event.target.value)
  }
  console.log('id',getRandomId())
  const filterItems=(value)=>{
    switch(value){
      case "Completed":
        setFilteredTodos(items.filter((el)=>el.completed===true))
        break;
      case "uncompleted":
        setFilteredTodos(items.filter((el)=>el.completed===false))
        break;
      case "All":
        setFilteredTodos(items)
        break;  
    }
  }
  return (
    <div>
      <form method="" action="">
        <input type="text" value={userInput} onChange={e => setUserInput(e.target.value)}/> {/*use an anonymous function when you need to pass argument in the function that you are calling*/}
        <button onClick={(e)=>{
          e.preventDefault();
          if(userInput===''){
            // setUserInput(userInput.trim()) /**Trim will remove the whitespace character */
            return
          }
          else{
            setItems([...items,{title:userInput,completed:false,id:getRandomId()}]);
            setUserInput('')
          }
        
          console.log(items)
       }}><i className="fas fa-plus-square"></i></button>
        <select onChange={(e)=>statusHandler(e)}>
            <option value='All'>All</option>
            <option value='Completed'>Completed</option>
            <option value='uncompleted'>uncompleted</option>
        </select>
      </form>
    </div>
  );
};
export default Add;
