// TaskForm.js
import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "./index.css";

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: "",
    };
  }

  handleChange = (event) => {
    this.setState({ newTask: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.newTask.trim() !== "") {
      this.props.onAdd(this.state.newTask);
      this.setState({ newTask: "" });
    }
  };

  render() {
    return (
      <div className="task-form-container">
        <h2>Add Task</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Enter task"
              value={this.state.newTask}
              onChange={this.handleChange}
              className="task-input"
            />
          </Form.Group>
          <Button type="submit" variant="primary" className="add-task-button">
            Add Task
          </Button>
        </Form>
        <Button variant="danger" onClick={this.props.onDeleteAllFinished}>
          Delete All Finished Tasks
        </Button>
      </div>
    );
  }
}

export default TaskForm;
