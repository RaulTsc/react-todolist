import React from "react";
import { InputField } from "./InputField";
import { DueTimeField } from "./DueTimeField";

export const AllRemindersList = props => {
  let { todos } = props;
  console.log("todos-all", todos);
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
