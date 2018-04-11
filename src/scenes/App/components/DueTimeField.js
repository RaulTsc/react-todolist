import React from "react";
import moment from "moment-timezone";

export const DueTimeField = props => {
  return (
    <div className="due-time-field">
      {moment(new Date(props.todo.dueDate)).fromNow()}
    </div>
  );
};
