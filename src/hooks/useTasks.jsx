import { useState } from "react";

function useTasks() {
  const [tasks, setTasks] = useState([
    {
      description: "Eat",
      done: true,
    },
    {
      description: "Sleep",
      done: true,
    },
    {
      description: "Code",
      done: false,
    },
  ]);

  const addTask = (description) => {
    setTasks([
      ...tasks,
      {
        description,
        done: false,
      },
    ]);
  };

  const updateTask = (index, status) => {
    const arr = [...tasks];
    arr[index] = { ...arr[index], done: !arr[index].done };
    setTasks(arr);
  };

  const reorderTask = (index, dest) => {
    const arr = [...tasks];
    [arr[index], arr[index + dest]] = [arr[index + dest], arr[index]];
    setTasks(arr);
  };

  const deleteTask = (index) => {
    const arr = [...tasks];
    arr.splice(index, 1);
    setTasks(arr);
  };

  return { tasks, addTask, updateTask, reorderTask, deleteTask };
}

export default useTasks;
