import React from "react";
import "./App.css";
import VisibleTodoList from "./components/containers/VisibleTodoList";
import AddTodo from "./components/containers/AddTodo";

function App() {
  return (
    <div className="App">
      <VisibleTodoList />
      <AddTodo />
    </div>
  );
}

export default App;
