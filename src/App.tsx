import React from 'react';
import logo from './assets/logo.png'
import './App.css';
import BreedTable from './components/breed-table';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo" className="logo"/>;
      </header>
      <div className="App-container">
        <BreedTable />
      </div>
    </div>
  );
}

export default App;
