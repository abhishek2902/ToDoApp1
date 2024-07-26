import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import IfEmpty from "./components/IfEmpty";
import TodoItemsContextProvider from "./store/todo-items-store";


function App() {

  //let addNewItem=(itemName,itemDueDate)=>{}
  //let deleteItem=(itemName,y)=>{}
  
  return (    
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName/>
        <AddTodo/>
        <IfEmpty/>
        <TodoItems/>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;