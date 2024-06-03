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

    removeGetTodo: (state, action) => {
      state.existingTodo = null;
    },

    saveTodoToExistingTodo: (state, action) => {
      state.existingTodo = action.payload;
    },

    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const existingTodoArray = state.todos.filter((todo) => todo.id !== id);
      state.todos = [...existingTodoArray, action.payload];
    },
  },
});

export const todoSliceActions = todoSlice.actions;

export default todoSlice.reducer;
