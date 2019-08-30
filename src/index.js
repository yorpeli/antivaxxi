import React from 'react';
import ReactDOM from 'react-dom';
import '../src/firebase/firebase';
import '../src/styles/styles.scss'
import 'normalize.css/normalize.css';
import AppRouter from './Routers/AppRouter';
import * as serviceWorker from './serviceWorker';


const AppRender = (
    <AppRouter/>
);

ReactDOM.render(AppRender, document.getElementById('root'));

serviceWorker.unregister();
