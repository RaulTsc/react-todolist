import React from "react";
import { connect } from "react-redux";
import moment from "moment-timezone";
import "./App.css";
import { RemindersList } from "./components/RemindersList";
import { addReminder } from "./redux/actions";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: "",
      dueDate: "",
      disabled: false
    };
    this.addCheckActive = this.addCheckActive.bind(this);
  }

  addCheckActive() {
    const newValue = this.taskInput.value;
    if (newValue > "" && this.state.disabled)
      this.setState({ disabled: false });
    else if (!newValue && !this.state.disabled)
      this.setState({ disabled: true });
  }

  addTodo(e) {
    this.props.addReminder(
      this.taskInput.value,
      moment(this.timeInput.value).toDate()
    );
    this.setState({ todoText: "" });
    this.setState({ disabled: true });
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">
          <h1>Todo App</h1>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            placeholder="I have to..."
            onChange={event => this.setState({ todoText: event.target.value })}
          />
          <input
            className="form-control"
            type="datetime-local"
            onChange={event => this.setState({ dueDate: event.target.value })}
          />
          <button
            className="btn btn-success"
            type="button"
            onClick={e => this.addTodo(e)}
            disabled={this.state.disabled}
          >
            Add todo
          </button>
          <RemindersList todos={this.props.todos} />
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    todos: state.todos
  }),
  {
    addReminder
  }
)(App);
