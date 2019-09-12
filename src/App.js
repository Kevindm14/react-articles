import React from 'react';
import Home from './Components/home/index';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Route exact path="/" component={Home}/>
    </>
  )
}

export default App;
