import { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css"
import { TodoItemsContext } from "../store/todo-items-store";

let TodoItems = () => {

const contextObj= useContext(TodoItemsContext);
const todoItemsFromContext=contextObj.toDoItemsArr;

  return (
    <div className={styles.itemsContainer}>
        
      {todoItemsFromContext.map((obj) =>(
        <TodoItem key={obj.name} todoName={obj.name} todoDate={obj.dueDate}/>
      ))}

    </div>

  );
};
export default TodoItems;
