import TodoItem from "./TodoItem";
import styles from './TodoItems.module.css'

const TodoItems = ({ todoItems, onDeleteItem }) => {
  // Map through the todoItems array and render a TodoItem component for each item.
  // Pass the onDeleteItem callback function and the item's name and dueDate as props.
  return (
    <div className={styles.itemscontainer}>
      {todoItems.map(item => (
        <TodoItem
          key={item.name} // Unique key for each TodoItem component
          onDeleteItem={onDeleteItem} // Callback function for deleting a todo item
          todoName={item.name} // The name of the todo item being rendered
          todoDate={item.dueDate} // The due date of the todo item being rendered
        />
      ))}
    </div>
  );
};

export default TodoItems;
