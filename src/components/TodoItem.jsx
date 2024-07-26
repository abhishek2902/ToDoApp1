import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";
function TodoItem({todoName,todoDate}) {


  const contextObj= useContext(TodoItemsContext);
  //const deleteItem=contextObj.deleteItem;
  
  const handleButtonClick=(e)=>{
  const NewItemActionobj={
    type:"Delete_Item",
    payload:{
      itemName:todoName
    }
  } 
  contextObj.dispatchtoDoItems(NewItemActionobj)
}

  return (
    <div className="container kg-row">
      <div className="row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button" onClick={handleButtonClick}>
          <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
} 

export default TodoItem;
