// TaskManager.js
import React, { useState } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import "./index.css";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [displayType, setDisplayType] = useState("all");

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, finished: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, finished: !task.finished } : task
      )
    );
  };

  const deleteAllFinished = () => {
    setTasks(tasks.filter((task) => !task.finished));
  };

  return (
    <div>
      <TaskForm onAdd={addTask} onDeleteAllFinished={deleteAllFinished} />
      <div>
        <button onClick={() => setDisplayType("all")}>Show All</button>
        <button onClick={() => setDisplayType("finished")}>
          Show Finished
        </button>
        <button onClick={() => setDisplayType("unfinished")}>
          Show Unfinished
        </button>
      </div>
      {/* Display list of tasks */}
      <div>
        <h2>List of Tasks</h2>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.text}</li>
          ))}
        </ul>
      </div>
      {/* Display TaskList component with delete and toggle functionality */}
      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleTask}
        displayType={displayType}
      />
    </div>
  );
}

export default TaskManager;
