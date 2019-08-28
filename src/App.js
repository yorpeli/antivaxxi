import React from 'react';
import Header from '../src/Components/Header';
import Messagebox from './Components/Messagebox';
import AskForThings from './Components/AskForThings';
import valuesContext from '../src/context/ValuesContext';

import { vaccine} from './values/values';
//, charlatan, org, whyNot, professionM, professionF 
import '../src/firebase/firebase';
import '../src/styles/styles.scss'

class App extends React.Component {
  state = {
    vaccine
  }
  

  render(){
    return (
     <valuesContext.Provider value = {this.state}>
        <div className="container">
          <Header/>
          <p></p>
          <Messagebox/>
          <p></p>
          <AskForThings/>
        </div>
      </valuesContext.Provider>
    );
  }
}

export default App;
