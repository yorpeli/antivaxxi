import React from 'react';
import Header from '../src/Components/Header';
import Messagebox from './Components/Messagebox';

import '../src/styles/styles.scss'

function App() {
  return (
    <div className="App body">
      <Header/>
      <p></p>
      <Messagebox/>
    </div>
  );
}

export default App;
