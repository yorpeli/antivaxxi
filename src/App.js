import React from 'react';
import Header from '../src/Components/Header';
import Messagebox from './Components/Messagebox';

import '../src/styles/styles.scss'

function App() {
  return (
    <div className="container">
      <Header/>
      <p></p>
      <Messagebox/>
    </div>
  );
}

export default App;
