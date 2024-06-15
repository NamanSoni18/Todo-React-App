import AppName from "./Component/AppName";
import AddTodo from "./Component/AddTodo";
import TodoItems from "./Component/TodoItems";
import WelcomeMsg from "./Component/WelcomeMsg";
import "./App.css";
import { useState } from "react";

/**
 * The main App component that renders the entire application.
 */
function App() {
  // Initialize the initial todo items array
  const initialTodoItems = [
    {
      name: "NIMCET Exam",
      dueDate: "08/06/2023",
    },
    {
      name: "Today",
      dueDate: "15/06/2023",
    },
    {
      name: "Expected Result day hehe",
      dueDate: "24/06/2023",
    },
  ];

  // State variable to hold the list of todo items
  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName}, ${itemDueDate}`);

    // Create a new array with the current todo items and the new item
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];

    // Update the state with the new array of todo items
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName, todoItemDate) => {
    // Filter out the todo item to be deleted from the todo items array
    const newTodoItems = todoItems.filter(
      (item) => item.name !== todoItemName || item.dueDate !== todoItemDate
    );

    // Update the state with the new array of todo items
    setTodoItems(newTodoItems);
  };

  return (
    <div className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />

      {/* Render the welcome message if there are no todo items */}
      {todoItems.length === 0 ? <WelcomeMsg></WelcomeMsg> : null}

      <TodoItems
        onDeleteItem={handleDeleteItem}
        todoItems={todoItems}
      ></TodoItems>
    </div>
  );
}

export default App;
