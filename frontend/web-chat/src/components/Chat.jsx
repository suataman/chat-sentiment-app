import React, { useState } from "react";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    const newMessage = { text, sender: "user" };
    setMessages(prev => [...prev, newMessage]);

    try {
      const res = await fetch("http://localhost:5152/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text })
      });
      const data = await res.json();
      setMessages(prev => [
        ...prev,
        { text: `Duygu: ${data.sentiment}`, sender: "ai" }
      ]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [
        ...prev,
        { text: "Sunucuya bağlanılamadı 😔", sender: "system" }
      ]);
    }
  };

  return (
    <div style={{
      width: "90%",
      maxWidth: "400px",
      border: "1px solid #444",
      borderRadius: "10px",
      padding: "15px",
      backgroundColor: "#1f2328",    // mesaj kutusu koyu
      color: "#e1e1e1",               // yazı açık
    }}>
      <h2 style={{ textAlign: "center", color: "#ffffff" }}>💬 Chat Sentiment</h2>
      <MessageList messages={messages} />
      <MessageInput onSend={sendMessage} />
    </div>
  );
};

export default Chat;
