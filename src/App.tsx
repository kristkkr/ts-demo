import React from 'react';
import logo from './logo.svg';
import './App.css';
import BrushChart from './Charts/BrushChart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrushChart width={1200} height={600}/>
      </header>
    </div>
  );
}

export default App;
