import React from "react";
import Add from "./addtodo";
import {useState} from "react";
import Render from './rendertodo';


const App = () => {
  const[items,setItems]=useState([]);
  const[userInput,setUserInput]=useState('');
  return (
    <div>
      <h1>Ayush's Todo List</h1>
      <Add  items={items} setItems={setItems} userInput={userInput} setUserInput={setUserInput}/>
      <Render items={items} setItems={setItems}/>
    </div>
  );
};
export default App;
