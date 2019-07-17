import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home/Home';
import Teams from './components/Pages/Teams/Teams';
import Team from './components/Pages/Team/Team';
import PageNotFound from './components/Pages/PageNotFound/PageNotFound';
import Fixtures from './components/Pages/Fixtures/Fixtures';

function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <Switch>
        <Route path="/teams/:id" component={Team} />
        <Route path="/teams" component={Teams} />
        <Route path="/fixtures" component={Fixtures} />
        <Route path="/" exact component={Home} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

