import React from 'react';
import Nav from './components/Nav'
import Header from './components/Header';
import About from './components/About';
import Cardcontainer from './components/Cardcontainer';
import './App.css'
function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Cardcontainer />
    </div>
  );
}

export default App;
