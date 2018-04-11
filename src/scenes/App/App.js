import React from "react";
import { connect } from "react-redux";
import moment from "moment-timezone";
import "./App.css";
import { TodosList } from "./components/TodosList";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: "",
      dueDate: ""
    };
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
            onChange={e => this.setState({ todoText: e.target.value })}
          />
          <input
            className="form-control"
            type="datetime-local"
            defaultValue={moment().format("YYYY-MM-DDTHH:mm")}
            onChange={e => this.setState({ dueDate: e.target.value })}
          />
          <button className="btn btn-success" type="button">
            Add todo
          </button>
          <TodosList todos={this.props.todos} />
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    todos: state.todos
  }),
  {}
)(App);
