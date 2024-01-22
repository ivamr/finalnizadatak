// TaskList.js
import React from "react";
import "./index.css";

function TaskList(props) {
  const { tasks, onDelete, onToggle, displayType } = props;

  // Filter tasks based on the display type
  const filteredTasks =
    displayType === "all"
      ? tasks
      : displayType === "finished"
      ? tasks.filter((task) => task.finished)
      : tasks.filter((task) => !task.finished);

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <span
              style={{
                textDecoration: task.finished ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>
            <button onClick={() => onDelete(task.id)}>Delete</button>
            <button onClick={() => onToggle(task.id)}>
              {task.finished ? "Mark as Unfinished" : "Mark as Finished"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
