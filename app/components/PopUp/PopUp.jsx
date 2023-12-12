"use client"

import React from 'react';
import styles from './popup.module.css';

const Popup = ({ showPopup, popupBackground, popupMessage, onClose }) => {
  return (
    <>
      {showPopup && (
        <div className={styles.container}>
          <div
            className={styles.popup}
            style={{
              backgroundImage: popupBackground, //Gif de fundo do PopUp
              fontSize: 40,
              WebkitTextStrokeWidth: 0.7,
              WebkitTextStrokeColor: 'black',
            }}
          >
            <div className={styles.content}>
              <span>{popupMessage}</span> {/*mensagem texto*/}
              <button onClick={onClose} className={styles.botao}>
                Fechar
              </button> {/*botão fechar PopUp*/}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;