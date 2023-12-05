"use client"
import React, { useState } from 'react';
import Popup from '../components/PopUp/PopUp';

 /* const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [popUpMessage, setPopUpMessage] = useState('');
  const [popUpBackground, setPopUpBackground] = useState ('');

  function handleShowPopUp (background, time){
    setPopUpBackground(background);
    setPopUpMessage(message);
    setShowPopup (true);
    setTimeout (() => {
      setShowPopup (false)
    }, time)
  }  
  
  return (
      <div>
        <button onClick={() => handleShowPopUp('url(https://media.tenor.com/KBnATdctL1MAAAAC/jujutsu-kaisen-jujutsu-kaisen-dance.gif)', 'Voce ganhou!')}>Vitória</button>
        <button onClick={() => handleShowPopUp('url(https://media.tenor.com/iEvzToGb7W0AAAAC/nanami-shigemo.gif)', 'Voce Perdeu!')}>Derrota</button>
        <button onClick={() => handleShowPopUp('url(https://media.tenor.com/m1arMEn09NcAAAAd/todo-aoi-todo.gif)', 'Empate!')}>Empate</button>
     
      { <Popup showPopup={showPopup} message={popUpMessage} /> }

    </div>
  );
};

export default App; */

const PopupWithBackground = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupBackground, setPopupBackground] = useState('');
  const [popupMessage, setPopupMessage] = useState('');

  const handleShowPopUp = (background, message) => {
    setShowPopup(true);
    setPopupBackground(background);
    setPopupMessage(message);
  };

  return (
    <div>
      <button onClick={() => handleShowPopUp('url(https://media.tenor.com/KBnATdctL1MAAAAC/jujutsu-kaisen-jujutsu-kaisen-dance.gif)', 'Voce ganhou!')}>Vitória</button>
      <button onClick={() => handleShowPopUp('url(https://media.tenor.com/iEvzToGb7W0AAAAC/nanami-shigemo.gif)', 'Voce Perdeu!')}>Derrota</button>
      <button onClick={() => handleShowPopUp('url(https://media.tenor.com/m1arMEn09NcAAAAd/todo-aoi-todo.gif)', 'Empate!')}>Empate</button>

      {showPopup && (
        <div
          style={{
            backgroundImage: popupBackground,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            color: 'white',
            borderRadius: '15px',
            zIndex: 9999,
            width: '600px', // largura do pop-up
            height: '300px', // altura do pop-up
          }}
        >
          {popupMessage}
        </div>
      )}
    </div>
  );
};

export default PopupWithBackground;

