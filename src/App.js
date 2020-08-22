import React, {Component} from 'react';
import routes from './routes';
import './reset.css';
import './App.css';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <div>
      <Nav />
      {routes}
    </div>
  );
}

export default App;