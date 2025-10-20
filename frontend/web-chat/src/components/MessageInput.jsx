import React, { useState } from "react";

const MessageInput = ({ onSend }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSend(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Bir şey yaz..."
        style={{
          flex: 1,
          padding: "8px",
          borderRadius: "5px",
          border: "1px solid #555",
          backgroundColor: "#2b2b2b",      /* koyu background */
          color: "#e1e1e1"                 /* açık yazı rengi */
        }}
      />
      <button
        type="submit"
        style={{
          padding: "8px 12px",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "#4a90e2",
          color: "#ffffff",
          cursor: "pointer"
        }}
      >
        Gönder
      </button>
    </form>
  );
};

export default MessageInput;
