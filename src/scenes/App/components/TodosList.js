import React from "react";
import { AllTodosList } from "./AllTodosList";

export const TodosList = props => {
  return <AllTodosList todos={props.todos} />;
};
