import { ADD_TODO } from "./actionTypes";
import { v4 } from "node-uuid";

const reminderAdd = action => ({
  text: action.result.text,
  id: v4(),
  dueDate: action.result.dueDate
});

const initialState = {
  todos: []
};

const todosReducer = (state = initialState, action) => {
  let { todos } = state;
  switch (action.type) {
    case ADD_TODO:
      todos = [...todos, reminderAdd(action)];
      todos = todos.sort((r1, r2) => r1.dueDate > r2.dueDate);
      return { todos };
    default:
      return { todos };
  }
};

export default todosReducer;
