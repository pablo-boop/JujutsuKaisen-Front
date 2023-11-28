import React, { useState, useEffect } from 'react';
import style from './popUp.module.css'

const Popup = ({ showPopup, text, type }) => {
  const [isVisible, setIsVisible] = useState(showPopup);



  useEffect(() => {
    let timeoutId;

    if (isVisible) {
      timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, 10000); // Definindo a duração para 10 segundos (10000 milissegundos)
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div>
      {isVisible && (
        <div className="popup">
          <div className={type}>
            <div className="popup_text">
              <p>{text}</p>
            </div>
            <button onClick={handleClose} className="close_btn">
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
