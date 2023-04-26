import React from 'react';
import Nav from './components/Nav'
import Header from './components/Header';
import About from './components/About';
import './App.css'
function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
    </div>
  );
}

export default App;
