import React from 'react';
import Header from '../src/Components/Header';
import Messagebox from './Components/Messagebox';

import '../src/styles/styles.scss'

function App() {
  return (
    <div className="App">
      <Header/>
      <h2>Test App for now</h2>
      <Messagebox/>
    </div>
  );
}

export default App;
