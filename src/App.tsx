import React from "react";
import "./App.css";
import VisibleTodoList from "./components/containers/VisibleTodoList";
import AddTodo from "./components/containers/AddTodo";
import Footer from "./components/presentational/Footer";

function App() {
  return (
    <div className="App">
      <VisibleTodoList />
      <AddTodo />
      <Footer />
    </div>
  );
}

export default App;
