import React from 'react';
import Header from '../src/Components/Header';
import Messagebox from './Components/Messagebox';
import AskForThings from './Components/AskForThings';

import '../src/firebase/firebase';
import '../src/styles/styles.scss'

function App() {
  return (
    <div className="container">
      <Header/>
      <p></p>
      <Messagebox/>
      <p></p>
      <AskForThings/>
    </div>
  );
}

export default App;
