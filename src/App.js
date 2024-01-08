import React from 'react';
import { Router, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
<div>
  <nav>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
    </ul>
  </nav>
</div>
    </Router>
  );
}

export default App;
