import React from 'react';
import Header from '../src/Components/Header';
import Messagebox from './Components/Messagebox';
import AskForThings from './Components/AskForThings';


function genreator() {
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

export default genreator;
