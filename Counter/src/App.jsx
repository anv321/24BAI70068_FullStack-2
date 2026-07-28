import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(10);

  const addButton = () => {
    setCounter(counter + 1);
  };

  const removeButton = () => {
    setCounter(counter - 1);
  };

  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f7fb",
    fontFamily: "Arial, sans-serif",
  };

  const headingStyle = {
    color: "#1f2937",
    marginBottom: "20px",
  };

  const buttonRowStyle = {
    display: "flex",
    gap: "12px",
  };

  const buttonStyle = {
    padding: "10px 18px",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    color: "white",
  };

  const addStyle = {
    ...buttonStyle,
    backgroundColor: "#16a34a",
  };

  const removeStyle = {
    ...buttonStyle,
    backgroundColor: "#dc2626",
  };

  const countStyle = {
    fontSize: "22px",
    fontWeight: "bold",
    marginTop: "15px",
    color: "#111827",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to Counter!</h1>
      <div style={buttonRowStyle}>
        <button style={addStyle} onClick={addButton}>
          Add
        </button>
        <button style={removeStyle} onClick={removeButton}>
          Remove
        </button>
      </div>
      <p style={countStyle}>Current Count: {counter}</p>
    </div>
  );
}

export default App;
