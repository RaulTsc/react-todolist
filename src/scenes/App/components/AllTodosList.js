import React from "react";
import { InputField } from "./InputField";
import { DueTimeField } from "./DueTimeField";

export const AllTodosList = props => {
  let { todos } = props;
  return (
    <ul className="list-group">
      {todos.map(todo => (
        <li key={todo.id} className="list-group-item">
          <InputField todo={todo} />
          <DueTimeField todo={todo} />
        </li>
      ))}
    </ul>
  );
};
