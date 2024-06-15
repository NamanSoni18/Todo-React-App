import styles from "./TodoItem.module.css";

function TodoItem({ todoName, todoDate, onDeleteItem }) {
  // Render the todo item with name, date, and delete button.
  return (
    <div className="container">
      <div className={`${styles["kgrow"]} row`}>
        {/* Render the todo item name */}
        <div className="col-6">{todoName}</div>
        {/* Render the due date of the todo item */}
        <div className="col-4">{todoDate}</div>
        {/* Render the delete button */}
        <div className="col-2">
          <button
            type="button"
            className={`${styles["kgbutton"]} btn btn-danger`}
            onClick={() => onDeleteItem(todoName, todoDate)}
          >
            {/* Call the onDeleteItem callback with the todo item name and due date when the delete button is clicked */}
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
