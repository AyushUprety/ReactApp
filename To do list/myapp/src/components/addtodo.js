//return nagari ni console la ta result dekhayo
// aasti ko jasto anonymous function halnu parena. Taila line no 13 ma set
/** setItem property kasari use garna janinas. You wrote setItems(userInput).
 * What you were doing was replacing the array with item variable and not appending
 * the input to the todolist array.I donot want to display anything when nothing is 
 * typed in input field. But, I am having a problem.
 */

import React from "react";
const Add = (props) => {
  const{items,setItems,userInput,setUserInput}=props;
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
            setItems([...items,userInput]);
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
