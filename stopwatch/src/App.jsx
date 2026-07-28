import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const startStopwatch = () => setIsRunning(true);
  const stopStopwatch = () => setIsRunning(false);
  const resetStopwatch = () => {
    setTime(0);
    setIsRunning(false);
  };

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  const formatTime = (value) => String(value).padStart(2, "0");

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Stopwatch</h1>

      <div style={timeBoxStyle}>
        {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
      </div>

      <div style={buttonRowStyle}>
        <button style={startStyle} onClick={startStopwatch}>Start</button>
        <button style={stopStyle} onClick={stopStopwatch}>Stop</button>
        <button style={resetStyle} onClick={resetStopwatch}>Reset</button>
      </div>
    </div>
  );
}

const containerStyle = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "#f3f4f6",
  fontFamily: "Arial, sans-serif",
};

const headingStyle = {
  fontSize: "40px",
  marginBottom: "20px",
  color: "#111827",
};

const timeBoxStyle = {
  fontSize: "48px",
  fontWeight: "bold",
  padding: "20px 30px",
  background: "#ffffff",
  borderRadius: "12px",
  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  marginBottom: "25px",
};

const buttonRowStyle = {
  display: "flex",
  gap: "12px",
};

const baseButtonStyle = {
  padding: "10px 18px",
  fontSize: "16px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  color: "white",
};

const startStyle = {
  ...baseButtonStyle,
  backgroundColor: "#16a34a",
};

const stopStyle = {
  ...baseButtonStyle,
  backgroundColor: "#dc2626",
};

const resetStyle = {
  ...baseButtonStyle,
  backgroundColor: "#2563eb",
};

export default App;
