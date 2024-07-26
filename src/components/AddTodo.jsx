import { useContext, useRef } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  
  const todoNameElement=useRef();
  const todoDateElement=useRef();
  
  const contextobj=useContext(TodoItemsContext);
  //const addNewItem=contextobj.addNewItem;
  

  const handleButtonClick=(e)=>{
    e.preventDefault();
    let todoName=todoNameElement.current.value;
    let todoDate=todoDateElement.current.value;
    todoNameElement.current.value='';
    todoDateElement.current.value='';
    //addNewItem(todoName,todoDate);
    const NewItemActionobj={
      type:"New_Item",
      payload:{
        itemName:todoName,
        itemDueDate:todoDate
      }
    }
    contextobj.dispatchtoDoItems(NewItemActionobj)
  }

  return (
    <div className="container">
      <form className="row kg-row" onSubmit={handleButtonClick}>
        <div className="col-6">
          <input type="text" placeholder="Enter Todo here"ref={todoNameElement}/>
        </div>
        <div className="col-4">
          <input type="date" ref={todoDateElement}/>
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success  kg-button">
          <IoMdAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
