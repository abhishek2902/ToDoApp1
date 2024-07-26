import { createContext, useReducer } from "react"

export const TodoItemsContext=createContext();

const toDoItemsReducer=(currToDoItems,action)=>{
let newToDoItems=currToDoItems;
  if(action.type==='New_Item'){
    newToDoItems=[
        ...currToDoItems,
        {name:action.payload.itemName,dueDate:action.payload.itemDueDate}
    ]
  }
  else if(action.type==='Delete_Item'){
    newToDoItems=currToDoItems.filter((obj)=>(obj.name!==action.payload.itemName)  
  )
  }
  return newToDoItems;
}

//New Component to reduce complexity in App component.
const TodoItemsContextProvider=({children})=>{
    const [toDoItemsArr,dispatchtoDoItems]=useReducer(toDoItemsReducer,[]);

    return<TodoItemsContext.Provider value={{toDoItemsArr,dispatchtoDoItems}}>
      {children}
    </TodoItemsContext.Provider>     
}

export default TodoItemsContextProvider;