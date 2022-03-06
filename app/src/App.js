import './App.css';
import React from 'react';
import CompoundCalc from './compound-calc'
import Main from './main'

function App() {
  return (
    <React.Fragment >
      <header className="App-header">
      <Main/>
      <CompoundCalc/>
      </header>
    </React.Fragment>
  );
}

export default App;
