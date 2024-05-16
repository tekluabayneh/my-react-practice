// import React, { useState } from "react";

// function TodoList() {
//   // Define a state variable "todos" and a function "setTodos" to update it
//   const [todos, setTodos] = useState([]);
//   // Define a state variable "inputValue" and a function "setInputValue" to update it
//   const [inputValue, setInputValue] = useState("");

//   // Function to add a new todo item
//   const addTodo = () => {
//     if (inputValue.trim() !== "") {
//       setTodos([...todos, inputValue]);
//       setInputValue("");
//     }
//   };

//   // Function to remove a todo item
//   const removeTodo = (index) => {
//     const newTodos = [...todos];
//     newTodos.splice(index, 1);
//     setTodos(newTodos);
//   };

//   return (
//     <div>
//       <h2>To-Do List</h2>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//         placeholder="Enter a new task"
//       />
//       <button onClick={addTodo}>Add</button>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>
//             {todo}
//             <button onClick={() => removeTodo(index)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoList;

import React, { Component } from "react";

export class functioncomp extends Component {
  constructor() {
    super();

    this.state = {
      change: "selam",
    };
    this.handler = this.handler.bind(this);
  }

  handler() {
    this.setState({
      change: "chawo",
    });
    console.log(this);
  }

  render() {
    return (
      <div>
        <h1>{this.state.change}</h1>
        {/*      <button onClick={() => this.handler()}>click me</button> */}
        {/*  <button onClick={this.handler.bind(this)}>click me</button> */}
        <button onClick={this.handler}>click me</button>
        {/* this one need another thing to do for it like this.handler = this.handler.bind(this) */}
      </div>
    );
  }
}

export default functioncomp;
