import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => setData(res.rates || {}))
      .catch(() => setData({}));
  }, [currency]);

  return data;
}

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState("");

  const currencyInfo = useCurrencyInfo(from);

  useEffect(() => {
    if (currencyInfo[to]) {
      setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
    }
  }, [amount, to, currencyInfo]);

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Currency Converter</h1>

      <div style={cardStyle}>
        <div style={rowStyle}>
          <div style={fieldStyle}>
            <label style={labelStyle}>From</label>
            <select value={from} onChange={(e) => setFrom(e.target.value)} style={inputStyle}>
              {Object.keys(currencyInfo).map((code) => (
                <option key={code} value={code}>{code}</option>
              ))}
            </select>
          </div>

          <div style={fieldStyle}>
            <label style={labelStyle}>To</label>
            <select value={to} onChange={(e) => setTo(e.target.value)} style={inputStyle}>
              {Object.keys(currencyInfo).map((code) => (
                <option key={code} value={code}>{code}</option>
              ))}
            </select>
          </div>
        </div>

        <div style={fieldStyle}>
          <label style={labelStyle}>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={resultStyle}>
          <p style={resultLabelStyle}>Converted Amount:</p>
          <h2 style={resultValueStyle}>{convertedAmount || "0.00"} {to}</h2>
        </div>

        <p style={noteStyle}>
          Available currencies loaded: {Object.keys(currencyInfo).length}
        </p>
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
  padding: "20px",
};

const headingStyle = {
  fontSize: "36px",
  marginBottom: "24px",
  color: "#111827",
  textAlign: "center",
};

const cardStyle = {
  width: "100%",
  maxWidth: "420px",
  background: "white",
  padding: "24px",
  borderRadius: "14px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
};

const rowStyle = {
  display: "flex",
  gap: "14px",
  marginBottom: "16px",
};

const fieldStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "6px",
};

const labelStyle = {
  fontSize: "14px",
  fontWeight: "bold",
  color: "#374151",
};

const inputStyle = {
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #d1d5db",
  fontSize: "15px",
  width: "100%",
  boxSizing: "border-box",
};

const resultStyle = {
  marginTop: "20px",
  padding: "16px",
  background: "#eff6ff",
  borderRadius: "10px",
  textAlign: "center",
};

const resultLabelStyle = {
  margin: "0 0 6px 0",
  fontSize: "14px",
  color: "#4b5563",
};

const resultValueStyle = {
  margin: "0",
  fontSize: "28px",
  fontWeight: "bold",
  color: "#1e40af",
};

const noteStyle = {
  marginTop: "12px",
  fontSize: "13px",
  color: "#6b7280",
  textAlign: "center",
  margin: "12px 0 0 0",
};

export default App;
