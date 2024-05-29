import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoSliceActions } from "../feature/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const [button, setButton] = useState();
  const dispatch = useDispatch();
  const existingTodo = useSelector((state) => state.existingTodo);

  useEffect(() => {
    if (existingTodo) {
      setInput(existingTodo);
      // dispatch(removeTodo(existingTodo.id));
    }
  }, [existingTodo]);

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(todoSliceActions.addTodo(input));
    dispatch(todoSliceActions.removeGetTodo());
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input.text}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
