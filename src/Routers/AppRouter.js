import React from 'react';
import generator from '../Generator';
import loadID from '../Components/loadedID';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const AppRouter = ()=>(
    <BrowserRouter>
        <Switch>
            <Route path="/" component={generator} exact={true}/>
            <Route path="/l/:id" component={loadID}/>
        </Switch>
    </BrowserRouter>
);


export default AppRouter;

