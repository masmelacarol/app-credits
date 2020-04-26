import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Credits from '../pages/Credits';


const App = () => {    
  return (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Credits}></Route>
    </Switch>      
      
    </BrowserRouter>
  );
}

export default App;