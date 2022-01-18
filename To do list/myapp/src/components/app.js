import React from "react";
import Add from "./addtodo";
import {useState} from "react";
import Display from './rendertodo';


const App = () => {
  const[items,setItems]=useState([]);
  const[userInput,setUserInput]=useState('');
  const[completed,setCompleted]=useState('all');
  const[filteredTodos,setFilteredTodos]=useState([]);

  return (
    <div>
      <h1>Ayush's Todo List</h1>
      <Add filteredTodos={filteredTodos} setFilteredTodos={setFilteredTodos} completed={completed} setCompleted={setCompleted}items={items} setItems={setItems} userInput={userInput} setUserInput={setUserInput}/>
      <Display items={items} setItems={setItems}/>
    </div>
  );
};
export default App;
