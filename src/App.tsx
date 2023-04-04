import React from 'react';
import logo from './logo.svg';
import ProjectCountPage from './pages/ProjectCountPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ProjectCountPage/>
      </header>
    </div>
  );
}

export default App;
