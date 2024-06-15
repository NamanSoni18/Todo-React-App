import { useState } from "react";
import styles from "./TodoItem.module.css";

function AddTodo({ onNewItem }) {
  // State variables to store the todo item name and due date.
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };

  /**
   * Event handler for handling add button click event.
   * Calls the callback function to add the new todo item and resets the state variables.
   */
  const handleAddButtonClicked = () => {
    onNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };

  return (
    <div className="container">
      <div className={`${styles["kgrow"]} row`}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDateChange} value={todoDate} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className={`${styles["kgbutton"]} btn btn-success`}
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
