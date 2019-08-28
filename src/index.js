import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './values/values';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
