// App.js
import React, { useState } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);
  const [displayType, setDisplayType] = useState("all"); // 'all', 'finished', 'unfinished'

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
      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleTask}
        displayType={displayType}
      />
    </div>
  );
}

export default App;
