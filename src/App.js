import './App.css';

import React from 'react';
import NavBar from './components/NavBar';
import Users from './components/Users';
import Hook1 from './components/Hook1';
import Hook2 from './components/Hook2';

function App() {
  return (
  <div>
    <NavBar/>
    <Users/>
    <Hook1/>
    <Hook2/>
  </div>
);
}

export default App;
