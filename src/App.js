import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Countries from './components/Pages/Countries/Countries';
import Teams from './components/Pages/Teams/Teams';

function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <Switch>
        <Route path="/teams" component={Teams} />
        <Route path="/" component={Countries} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

