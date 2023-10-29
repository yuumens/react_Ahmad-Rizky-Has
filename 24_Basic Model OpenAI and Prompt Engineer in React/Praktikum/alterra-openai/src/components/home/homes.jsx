import React, { useState } from 'react';
import './homes.css'
import { openai } from '../../utils/config';

const Homes = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const sendMessage = async () => {
    if (input.trim() === '') return;

    setIsLoading(true);

    try {
      const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "user", content: input },
          { role: "assistant", content: "Placeholder for asisten" },
        ],
        temperature : 1,
        max_tokens : 256,
      });
      const botResponse = chatCompletion.choices[0].message.content;
      const userQuestion = input;
      setMessages([
        ...messages,
        { role: "user", text: userQuestion },
        { role: "assistant", text: botResponse },
      ]);
      setInput('');
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-bot">
      <div className="chat-bot-container">
      <h1>Simple OpenAI Chatbot</h1>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Tulis pesan..."
        />
        <button onClick={sendMessage} disabled={isLoading}>
          {isLoading ? 'Menjawab...' : 'Kirim'}
        </button>
      </div>
      <div className="chat-container">
        {messages.map((message, index) => (
      <div
        key={index}
        className={message.role === "user" ? "user-message" : "assistant-message"}
      >
        {message.text}
      </div>
        ))}
      </div>
      </div>
      
    </div>
  );
};

export default Homes;
