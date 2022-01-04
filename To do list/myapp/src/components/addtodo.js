import React from "react";
import {useState} from "react"
const Add = () => {
  const[addItem,changeAddItem]=useState('')   
  return (
    <div>
      <form method="" action="">
        <input type="text"/>
        <button><i class="fas fa-plus-square"></i></button>
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
