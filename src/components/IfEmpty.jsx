// import { useContext } from "react";
import React from 'react';

import { TodoItemsContext } from "../store/todo-items-store";


function IfEmpty(){
      
    // const contextObj= useContext(TodoItemsContext);
    // const todoItemsFromContext=contextObj.toDoItemsArr;

    const {toDoItemsArr} =React.useContext(TodoItemsContext);

    return(
        toDoItemsArr.length===0 && <h3>Enjoy</h3>
    )  
}

export default IfEmpty;