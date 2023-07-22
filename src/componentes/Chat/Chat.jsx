import React, {useState, useEffect} from 'react';
import {initChat, exitChat} from '../../services/ChatService';

export default function Chat () {
  const [chatText, setChatText] = useState ('');
  const [chatSent, setChatSent] = useState(false);
  console.log("componente renderizado");
  useEffect(()=>{
    initChat();
  },[chatSent]) //array de dependencias  
  
  const chatStyle = {};

  const chatStyleMe = {
    border: 'none',
    color: '#136c39',
    backgroundColor: '#caffec',
    padding: '5px 20px',
    borderRadius: '4px',
    textAlign: 'right',
  };


  function handleChange (evt) {
    const text=evt.target.value;
  }


  function handleSubmit () {
  
    setChatSent(true);
  }
  return (
    <section id="chat-chat">
      <p style={chatStyle}>
        <i>Priscila</i>: Hola! Como te ayudo
      </p>

      <input
        onChange={handleChange}
        id="chatText"
        placeholder=". . ."
        style={chatStyleMe}
        type="text"
      />

      <div className="container">
        <button onClick={handleSubmit} role="button" className="primary">
          Enviar
        </button>
        <button role="button" className="secondary">
          Cancelar

        </button>

      </div>

    </section>
  );
}
