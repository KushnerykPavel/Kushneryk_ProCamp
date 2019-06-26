import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Toolbar from './components/Toolbar/Toolbar';

function App() {
  return (
    <BrowserRouter >
      <Toolbar></Toolbar>
    </BrowserRouter>
  );
}

export default App;

