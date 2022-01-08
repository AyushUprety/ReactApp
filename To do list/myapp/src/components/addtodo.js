//return nagari ni console la ta result dekhayo
// aasti ko jasto anonymous function halnu parena

import React from "react";
const Add = (props) => {
  const{items,setItems,userInput,setUserInput}=props;
  return (
    <div>
      <form method="" action="">
        <input type="text" onChange={e => setUserInput(e.target.value)}/> {/*use an anonymous function when you need to pass argument in the function that you are calling*/}
        <button onClick={(e)=>{
          e.preventDefault();
          setItems(userInput);
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
