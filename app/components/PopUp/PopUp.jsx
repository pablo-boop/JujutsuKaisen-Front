"use client"

import React from 'react';
import styles from './popup.module.css';
import { useEffect } from 'react';

const Popup = ({ showPopup, imageUrl, text, onClose }) => {

  useEffect(() => {
    let timeout;

    if (showPopup) {
      // Define um timeout para fechar o Popup após 5 segundos
      timeout = setTimeout(() => {
        onClose();
      }, 5000);
    }

    // Limpa o timeout quando o componente é desmontado ou quando o Popup é fechado
    return () => {
      clearTimeout(timeout);
    };
  }, [showPopup, onClose]);
  return (
    // <>
    //   {showPopup && (
    //     <div className={styles.container}>
    //       <div
    //         className={styles.popup}
    //         style={{
    //           backgroundImage: popupBackground,
    //           fontSize: 40,
    //           WebkitTextStrokeWidth: 0.7,
    //           WebkitTextStrokeColor: 'black',
    //         }}
    //       >
    //         <div className={styles.content}>
    //           <span>{popupMessage}</span>
    //           <button onClick={onClose} className={styles.botao}>
    //             Fechar
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </>
    <div className={styles.container} style={{zIndex: '1000'}}>
      <div className={styles.popup}>
        <img src={imageUrl} alt="Imagem do Popup" style={{ maxWidth: '100%', maxHeight: '100%', backgroundPosition: 'center' }} />
      </div>
      <div className={styles.content}>
        <p>{text}</p>
      </div>
    </div>
  )
};

export default Popup;