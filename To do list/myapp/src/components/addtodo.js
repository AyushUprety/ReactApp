//return nagari ni console la ta result dekhayo
// aasti ko jasto anonymous function halnu parena. Taila line no 13 ma set
/** setItem property kasari use garna janinas. You wrote setItems(userInput).
 * What you were doing was replacing the array with item variable and not appending
 * the input to the todolist array.I donot want to display anything when nothing is 
 * typed in input field. But, I am having a problem.Problem was you were initiating the
 * state with empty string and condition ma you were checking if null
 */

import React from "react";
const getRandomId = () => {
  return Math.random() * 1000;
}
const Add = (props) => {
  const{items,setItems,userInput,setUserInput,completed,setCompleted} = props;
  console.log('id',getRandomId())
  return (
    <div>
      <form method="" action="">
        <input type="text" onChange={e => setUserInput(e.target.value)}/> {/*use an anonymous function when you need to pass argument in the function that you are calling*/}
        <button onClick={(e)=>{
          e.preventDefault();
          if(userInput===''){
            // setUserInput(userInput.trim()) /**Trim will remove the whitespace character */
            return
          }
          else{
            setItems([...items,{title:userInput,id:getRandomId()}]);
          }
        
          console.log(items)
       }}><i className="fas fa-plus-square"></i></button>
        <select>
            <option>All</option>
            <option>Completed</option>
            <option>uncompleted</option>
        </select>
      </form>
    </div>
  );
};
export default Add;
