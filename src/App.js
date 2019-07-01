import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Countries from './components/Pages/Countries/Countries';

function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <Countries />
    </BrowserRouter>
  );
}

export default App;

