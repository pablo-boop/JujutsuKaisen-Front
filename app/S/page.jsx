"use client"

import React, { useState } from 'react';
import Popup from '../components/PopUp/PopUp';

const App = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupBackground, setPopupBackground] = useState('');
  const [popupMessage, setPopupMessage] = useState('');

  //alternar
  const togglePopup = (background, message) => {
    setShowPopup(true);
    setPopupBackground(background);
    setPopupMessage(message);

  };

  //fechar PopUp
  const closePopup = () => {
    setShowPopup(false);

  };

  return (
    <div>
      {/*vitória*/}
      <button onClick={() => togglePopup('url(https://media1.tenor.com/m/KBnATdctL1MAAAAC/jujutsu-kaisen-jujutsu-kaisen-dance.gif)', 'Voce ganhou!')}>Vitória</button>
      {/*derrota*/}
      <button onClick={() => togglePopup('url(https://media1.tenor.com/m/iEvzToGb7W0AAAAC/nanami-shigemo.gif)', 'Voce perdeu!')}>Derrota</button>
      {/*empate*/}
      <button onClick={() => togglePopup('url(https://media1.tenor.com/m/m1arMEn09NcAAAAd/todo-aoi-todo.gif)', 'Empate!')}>Empate</button>

      <Popup
        showPopup={showPopup}
        popupBackground={popupBackground} //Fundo do pop up
        popupMessage={popupMessage} // mensagem do pop up
        onClose={closePopup} //fechar pop up
      />
    </div>
  );
};

export default App;