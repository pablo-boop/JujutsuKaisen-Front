"use client"
import React, { useState } from 'react';
import Popup from '../components/PopUp/PopUp';

const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [popUpMessage, setPopUpMessage] = useState('');
  const [popUpType, setPopUpType] = useState ('');

  function handleShowPopUp (text, type, time){
    setPopUpMessage(text);
    setPopUpType(type);
    setShowPopup (true);
    setTimeout (() => {
      setShowPopup (false)
    }, time)
  }

  return (
    <div className="App">
      <button onClick={() => handleShowPopUp ('Voce Ganhou!', 'victory')}>
        Mensagem de Vitória
      </button>
      <button onClick={() => handleShowPopUp ('Voce Perdeu!', 'lose')}>
        Mensagem de Derrota
      </button>
      <button onClick={() => handleShowPopUp ('Empate!', 'gameTied')}>
        Mensagem de Empate
      </button>

       { <Popup showPopup={showPopup} text={popUpMessage} type={popUpType} /> }
    </div>
  );
};

export default App;