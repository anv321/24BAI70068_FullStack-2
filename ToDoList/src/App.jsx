import { useState } from "react";

let nextId = 1;

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAdd = () => {
    if (newTask.trim() === "") return;

    const task = {
      id: nextId++,
      label: newTask,
    };

    setTasks([...tasks, task]);
    setNewTask("");
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Todo List</h1>

      <div style={inputRowStyle}>
        <input
          type="text"
          aria-label="New task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={inputStyle}
          placeholder="Add a new task"
        />
        <button onClick={handleAdd} style={buttonStyle}>
          Add
        </button>
      </div>

      <ul style={listStyle}>
        {tasks.map((task) => (
          <li key={task.id} style={itemStyle}>
            <span>{task.label}</span>
            <button
              onClick={() => handleDelete(task.id)}
              style={deleteButtonStyle}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const containerStyle = {
  maxWidth: "500px",
  margin: "40px auto",
  padding: "20px",
  fontFamily: "Arial, sans-serif",
};

const headingStyle = {
  textAlign: "center",
  marginBottom: "20px",
};

const inputRowStyle = {
  display: "flex",
  gap: "8px",
  marginBottom: "20px",
};

const inputStyle = {
  flex: 1,
  padding: "10px",
  fontSize: "16px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  padding: "10px 16px",
  fontSize: "16px",
  borderRadius: "6px",
  border: "none",
  backgroundColor: "#2563eb",
  color: "white",
  cursor: "pointer",
};

const listStyle = {
  listStyle: "none",
  padding: 0,
  margin: 0,
};

const itemStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 12px",
  marginBottom: "8px",
  background: "#f9fafb",
  borderRadius: "6px",
  border: "1px solid #e5e7eb",
};

const deleteButtonStyle = {
  padding: "6px 10px",
  fontSize: "14px",
  borderRadius: "4px",
  border: "none",
  backgroundColor: "#dc2626",
  color: "white",
  cursor: "pointer",
};

export default App;
