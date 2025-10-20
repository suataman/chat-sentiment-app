// src/App.jsx
import React from "react";
import Chat from "./components/Chat";

function App() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",    // dikey ortalama için
      width: "100%",
      height: "100%",           // tam yüksekliğe eşitle
      minHeight: "100vh",

      backgroundColor: "#242424" // koyu arka plan
    }}>
      <Chat />
    </div>
  );
}

export default App;
