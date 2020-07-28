import React from 'react';
import Sidebar from './components/Sidebar';
import Today from './components/Today';
import './App.css';



function App() {
  return (

    <div id="layout" className="pure-g">
      <Sidebar />
      <Today />
    </div>
  );
}

export default App;
