import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Credits from '../pages/Credits';
import Layout from '../components/Layout';
import CreditUser from '../pages/CreditUser';
import Users from '../pages/Users';


const App = () => {    
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
            <Route exact path="/" component={Credits}></Route>
            <Route exact path="/credits" component={CreditUser}></Route>
            <Route exact path="/credits/:id" component={CreditUser}></Route>
            <Route exact path="/allUsers" component={Users}></Route>
        </Switch>      
      </Layout>
    </BrowserRouter>
  );
}

export default App;