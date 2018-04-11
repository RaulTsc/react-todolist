import { ADD_TODO } from "./actionTypes";

export const addReminder = (text, dueDate) => ({
  type: ADD_TODO,
  result: {
    text,
    dueDate
  }
});
