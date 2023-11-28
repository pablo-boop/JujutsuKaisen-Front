"use client"
import React, { useState } from 'react';
import Popup from '../components/PopUp/PopUp';

const App = () => {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <div className="App">
      <Popup showPopup={showPopup} text={"A vida"} type={"victory"} />
    </div>
  );
};

export default App;
