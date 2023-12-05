"use client"
import React, { useState, useEffect } from 'react';
import style from './popUp.module.css'

const Popup = ({ showPopup, text, type }) => {
  const [isVisible, setIsVisible] = useState(showPopup);

 /* useEffect(() => {
    let timeoutId;

    if (isVisible) {
      timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, 10000); // Definindo a duração para 10 segundos (10000 milissegundos)
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isVisible]); */

  const handleClose = () => {
    setIsVisible(false);
  };

  let gameResult = '';

  if(type === 'victory'){
    gameResult = style.victory //se o resultado do jogo for uma Vitória
  } else if (type === 'lose'){
    gameResult = style.lose  //se o resultado do jogo for uma Derrota
  } else{
    gameResult = style.gameTied //se o resultado do jogo for um Empate
  }

  return (
    <div>
      {isVisible && (
        <div className={style.popup}>
          <div className={style.popupContent}>
            <div className={style.popupText}>
              <h1>{text}</h1>
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