import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Countries from './components/Pages/Countries/Countries';
import Teams from './components/Pages/Teams/Teams';
import Team from './components/Pages/Team/Team';
import Fixtures from './components/Pages/Fixtures/Fixtures';

function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <Switch>
        <Route path="/teams/:id" component={Team} />
        <Route path="/teams" component={Teams} />
        <Route path="/fixtures" component={Fixtures} />
        <Route path="/" component={Countries} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

