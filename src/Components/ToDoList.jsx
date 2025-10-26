import React, { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState(["Apple", "Banana", "Pine Apple"]);
  const [newTask, setNewTask] = useState("");
  function handleNewTask(e) {
    setNewTask(e.target.value);
  }
  function handleAddTask() {
    if (newTask.trim() !== "") {
      setTasks((tasks) => [...tasks, newTask]);
      setNewTask("");
    }
  }

  function removeTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }
  function moveUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  function moveDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div>
      <h1>To Do List</h1>
      <input
        value={newTask}
        type="text"
        placeholder="Enter your task"
        onChange={handleNewTask}
      />
      <button type="text" value={tasks} onClick={handleAddTask}>
        Add Task
      </button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>Remove</button>
            <button onClick={() => moveUp(index)}>Move Up</button>
            <button onClick={() => moveDown(index)}>Move Down</button>
          </li>
        ))}
        <br />
      </ul>
    </div>
  );
};

export default ToDoList;
