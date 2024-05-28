import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
  existingTodo: null,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => {
        return todo.id !== action.payload;
      });
    },
    getTodo: (state, action) => {
      const { id, text } = action.payload;
      const existingTodo = state.todos.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.text = text;
      }
      state.existingTodo = existingTodo;
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const existingTodoArray = state.todos.filter((todo) => todo.id !== id);
      state.todos = [...existingTodoArray, action.payload];
    },
  },
});

export const { addTodo, removeTodo, updateTodo, getTodo } = todoSlice.actions;

export default todoSlice.reducer;
