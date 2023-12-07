"use client"

import React, { useState } from 'react';
import Popup from '../components/PopUp/PopUp';

const App = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupBackground, setPopupBackground] = useState('');
  const [popupMessage, setPopupMessage] = useState('');

  const togglePopup = (background, message) => {
    setShowPopup(true);
    setPopupBackground(background);
    setPopupMessage(message);

  };

  const closePopup = () => {
    setShowPopup(false);
    
  };

  return (
    <div>
      <button onClick={() => togglePopup('url(https://media1.tenor.com/m/KBnATdctL1MAAAAC/jujutsu-kaisen-jujutsu-kaisen-dance.gif)', 'Voce ganhou!')}>Vitória</button>
      <button onClick={() => togglePopup('url(https://media1.tenor.com/m/iEvzToGb7W0AAAAC/nanami-shigemo.gif)', 'Voce perdeu!')}>Derrota</button>
      <button onClick={() => togglePopup('url(https://media1.tenor.com/m/m1arMEn09NcAAAAd/todo-aoi-todo.gif)', 'Empate!')}>Empate</button>

      <Popup
        showPopup={showPopup}
        popupBackground={popupBackground}
        popupMessage={popupMessage}
        onClose={closePopup}
      />
    </div>
  );
};

export default App;