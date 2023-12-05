"use client"
import React, { useState, useEffect } from 'react';
import style from './popUp.module.css'

const Popup = ({ background, message }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupBackground, setPopupBackground] = useState('');
  const [popupMessage, setPopupMessage] = useState('');

  const handleClose = () => {
    setShowPopup(false);
  };

  const handleShowPopUp = (background, message) => {
    setShowPopup(true);
    setPopupBackground(background);
    setPopupMessage(message);
  }

  return (
    <div>

      {showPopup && (
        <div className={style.popup}  style={{
          backgroundImage: `url(${background})`}}>
          <div className={style.popupContent}>
            <div className={style.popupMessage}>
              <h1>{message}</h1>
            </div>
            <button onClick={handleClose} className={style.botao}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;