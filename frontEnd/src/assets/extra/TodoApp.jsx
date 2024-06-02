import React, { useState } from "react";
import "./TodoApp.css";
// import Category from "./Category";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faMarker } from "@fortawesome/free-solid-svg-icons";
import { faFileCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faSave } from "@fortawesome/free-solid-svg-icons";

// TodoApp
const TodoApp = () => {
  const [userInput, SetUserInput] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [tick, setTick] = useState(Array(taskList.length).fill(false));
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  function handleButton() {
    if (userInput === "") {
      alert("you cannot add empty task");
    } else {
      setTaskList([...taskList, userInput]);
      SetUserInput("");
      // console.log(taskList);
    }
  }

  function handleTick(index) {
    console.log(`tick is index ${index}`);

    setTick((prev) => {
      const newTick = [...prev];
      newTick[index] = !newTick[index];
      return newTick;
    });

    // console.log(tick);
  }

  function handleDelete(i) {
    // console.log(`delete is index ${i}`);

    setTaskList(taskList.filter((_, index) => i !== index));
    // console.log(`this is taskList ${taskList}`);
    setTick(tick.filter((_, index) => i !== index));
    // console.log(`this is tick ${tick}`);
  }

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditValue(taskList[index]);
  };

  const handleSave = (index) => {
    const updatedTasks = [...taskList];
    updatedTasks[index] = editValue;
    setTaskList(updatedTasks);
    setEditIndex(null); // Exit edit mode
    setEditValue(""); // Clear edit value
  };

  const handleChange = (e) => {
    setEditValue(e.target.value);
  };

  return (
    <>
      <div className="todo-app">
        <header className="header">
          <h1>Todo List</h1>
        </header>
        <div className="main">
          <div className="add-todo">
            <input
              type="text"
              placeholder="Add a new task..."
              value={userInput}
              onChange={(e) => SetUserInput(e.target.value)}
            />

            <button onClick={handleButton}>
              <FontAwesomeIcon icon={faFileCirclePlus} /> Add
            </button>
          </div>
          <ul className="todo-list">
            {/* Example list items, replace with dynamic content */}

            {taskList.map((item, index) => {
              return (
                <li key={index} className="todo-item">
                  <input
                    type="checkbox"
                    disabled={tick[index]}
                    checked={tick[index] ? true : false}
                    onChange={() => handleTick(index)}
                  />

                  {/* showing update input when editIndex is true */}
                  {editIndex === index ? (
                    <>
                      <input
                        type="text"
                        value={editValue}
                        onChange={handleChange}
                      />
                      <button
                        className="updateBtn"
                        onClick={() => handleSave(index)}
                      >
                        <FontAwesomeIcon icon={faSave} />
                      </button>
                    </>
                  ) : null}
                  <h4
                    className="todo-text"
                    style={
                      tick[index] ? { textDecoration: "line-through" } : null
                    }
                  >
                    {item}
                  </h4>

                  {/* update and delete button */}
                  <div className="setUpBtn">
                    <button
                      className="updateBtn"
                      style={{ visibility: tick[index] ? "hidden" : "visible" }}
                      title="update"
                      onClick={() => handleEdit(index)}
                    >
                      <FontAwesomeIcon icon={faMarker} />
                    </button>
                    <button
                      className="deleteBtn"
                      title="delete"
                      onClick={() => handleDelete(index)}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TodoApp;
