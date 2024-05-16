import React, { useState } from "react";
import "./ToDo-App_style.css";
/*  import  { BitCheckDouble, BiEdit, BiTrash, BiCheckCirci, Bireset, BiRefresh}  "./react-icons-/bi";
 */

import { BiCheckDouble, BiEdit } from "react-icons/bi";
import { BiEditAlt } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import { BiReset } from "react-icons/bi";
import { BiRefresh } from "react-icons/bi";
import { useParams, useSearchParams } from "react-router-dom";

function ToDoAPP() {
  const [todos, setodos] = useState([]);
  const [inputVlue, setinputVlue] = useState("");
  const [Editindex, setEditindex] = useState(-1);

  const addinput = () => {
    if (inputVlue.trim() !== "") {
      if (Editindex !== -1) {
        const updateToDo = [...todos];
        updateToDo[Editindex] = {
          task: inputVlue,
          completed: updateToDo[Editindex].completed,
        };
        setodos(updateToDo);
        /* setInterval(""); */
        setinputVlue("");
        setEditindex(-1);
      } else {
        setodos([...todos, { task: inputVlue, completed: false }]);
        setInterval("");
      }
    }
  };

  /* FOR THE EDIT BUTTON */
  const startedit = (index) => {
    setinputVlue(todos[index].task);
    setEditindex(index);
  };

  /* THIS IS FOR THE CANCEL BTN */

  const cancel = () => {
    setEditindex();
    setinputVlue("");
    setEditindex(-1);
  };

  /* THIS IS FOR THE REMOVE BTN */
  const removeToDos = (index) => {
    const updateToDo = todos.filter((_, i) => i !== index);
    setodos(updateToDo);
  };
  /* THIS IS FOR THE DONE BTN */
  const ToggleDonebtn = (index) => {
    const updateToDo = [...todos];
    updateToDo[index].completed = !updateToDo[index].completed;
  };

  /*  function Addbtn() {
    return setinputVlue("");
    console.log("loddfdfd");
  } */

  return (
    <div>
      <div className="todo_container">
        <h1>To-Do List</h1>

        <div className="input">
          <div className="input_section">
            <input
              className="input_fild"
              value={inputVlue}
              placeholder="Enter Task"
              onChange={(e) => setinputVlue(e.target.value)}
            />

            {Editindex !== -1 ? (
              <>
                <button onClick={addinput} className="Update_btn">
                  <BiCheckDouble />
                </button>

                <button onClick={cancel} className="Cancel_btn">
                  <BiRefresh />
                </button>
              </>
            ) : (
              <button className="Add_btn" onClick={addinput}>
                Add
              </button>
            )}

            <ul className="Todo_List">
              {todos.map((todos, index) => (
                <li key={index} className={todos.completed ? "completed" : ""}>
                  {todos.task}
                  <div className="btn_group">
                    <button onClick={startedit} className="btn_Edit">
                      <BiEdit />
                      
                    </button>

                    <button onClick={removeToDos} className="btn_remove">
                      <BiTrash />
                    </button>
                    <button
                      onClick={() => ToggleDonebtn(index)}
                      className="btn_done"
                    >
                      {todos.completed ? <BiReset /> : <BiCheckDouble />}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ToDoAPP;
