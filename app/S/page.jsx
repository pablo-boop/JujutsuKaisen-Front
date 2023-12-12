"use client"

import React, { useEffect, useState } from 'react';
import Popup from '../components/PopUp/PopUp';

const App = () => {
  const [showPopup, setShowPopup] = useState(true);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <div>
        {showPopup && (
          <Popup
            showPopup={showPopup}
            imageUrl="https://media1.tenor.com/m/KBnATdctL1MAAAAC/jujutsu-kaisen-jujutsu-kaisen-dance.gif"
            text="Você ganhou!"
            onClose={closePopup}
          />
        )}
      </div>
    </div>
  );
};

export default App;



// togglePopup('url(https://media1.tenor.com/m/KBnATdctL1MAAAAC/jujutsu-kaisen-jujutsu-kaisen-dance.gif)', 'Voce ganhou!')
// togglePopup('url(https://media1.tenor.com/m/iEvzToGb7W0AAAAC/nanami-shigemo.gif)', 'Voce perdeu!')
// togglePopup('url(https://media1.tenor.com/m/m1arMEn09NcAAAAd/todo-aoi-todo.gif)', 'Empate!')