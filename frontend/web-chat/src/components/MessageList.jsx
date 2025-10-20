import React from "react";

const MessageList = ({ messages }) => (
  <div style={{
      height: "300px",
      overflowY: "auto",
      marginBottom: "10px",
    }}>
    {messages.map((msg, idx) => (
      <div
        key={idx}
        style={{
          textAlign: msg.sender === "user" ? "right" : "left",
          margin: "5px 0",
        }}
      >
        <span
          style={{
            display: "inline-block",
            backgroundColor:
              msg.sender === "user"
                ? "#3a7842"
                : msg.sender === "ai"
                ? "#333842"
                : "#5a2a2a",
            color: "#ffffff",             /* beyaz yazı rengi */
            borderRadius: "10px",
            padding: "8px 12px",
          }}
        >
          {msg.text}
        </span>
      </div>
    ))}
  </div>
);

export default MessageList;
