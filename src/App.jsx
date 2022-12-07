import "./styles/style.css";
import "./App.css";
import { Button, Input, ListItem, TopBanner } from "./components";
import { useState } from "react";
import useTasks from "./hooks/useTasks";

function App() {
  const { tasks, addTask, updateTask, reorderTask, deleteTask } = useTasks();
  const [inp, setInp] = useState("");

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#F0F0F0",
      }}
    >
      <TopBanner count={tasks.filter((t) => t.done).length} />
      <div className='add flex justify-center'>
        <Input value={inp} onChange={(e) => setInp(e.target.value)} />
        <Button
          onClick={() => {
            addTask(inp);
            setInp("");
          }}
          style={{ marginLeft: "8px" }}
        >
          Add
        </Button>
      </div>
      <div className='flex flex-col justify-center'>
        {tasks.length === 0 && (
          <h3 style={{ textAlign: "center" }}>No Tasks Remaining</h3>
        )}
        {tasks.map((task, idx) => {
          return (
            <ListItem
              data={task}
              idx={idx}
              disableSwap={
                idx === 0 ? "top" : idx === tasks.length - 1 ? "bottom" : null
              }
              handleCheck={updateTask}
              handleReorder={reorderTask}
              handleDelete={deleteTask}
              key={idx}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
