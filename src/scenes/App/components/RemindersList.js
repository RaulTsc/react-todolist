import React from "react";
import { AllRemindersList } from "./AllRemindersList";

export const RemindersList = props => {
  console.log("todos-reminderslist", props.todos);
  return <AllRemindersList todos={props.todos} />;
};
