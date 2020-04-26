import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Credits from '../pages/Credits';
import Layout from '../components/Layout';


const App = () => {    
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
            <Route exact path="/" component={Credits}></Route>
        </Switch>      
      </Layout>
    </BrowserRouter>
  );
}

export default App;