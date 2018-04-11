import { ADD_REMINDER } from "./actionTypes";

export const addReminder = (text, dueDate) => ({
  type: ADD_REMINDER,
  result: {
    text,
    dueDate
  }
});
