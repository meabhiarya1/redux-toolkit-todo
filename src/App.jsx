import { useState } from "react";
import AddTodo from "./comp/AddTodo";
import Todos from "./comp/Todos";
import './App.css'

function App() {
  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
