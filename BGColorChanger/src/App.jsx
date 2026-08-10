import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("#f3f4f6");

  const colors = [
    { name: "Light", value: "#f3f4f6" },
    { name: "Dark", value: "#11171f" },
    { name: "Blue", value: "#c1f8ee" },
    { name: "Pink", value: "#ffcaeb" },
    { name: "Purple", value: "#d1a1e3" },
  ];

  const isDark = bgColor === "#11171f";

  const pageStyle = {
    minHeight: "100vh",
    backgroundColor: bgColor,
    color: isDark ? "white" : "black",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    transition: "background-color 0.3s, color 0.3s",
  };

  const headingStyle = {
    color: isDark ? "white" : "black",
  };

  const buttonBase = {
    padding: "10px 16px",
    fontSize: "14px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    cursor: "pointer",
  };

  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Home Page</h1>
      <p>Use the buttons below to change the background theme.</p>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "20px" }}>
        {colors.map((c) => (
          <button
            key={c.name}
            onClick={() => setBgColor(c.value)}
            style={{
              ...buttonBase,
              backgroundColor: c.value,
              color: c.value === "#1f2937" ? "white" : "black",
            }}
          >
            {c.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
