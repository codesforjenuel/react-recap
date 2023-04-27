import React from 'react';
import Nav from './components/Nav'
import Header from './components/Header';
import About from './components/About';
import Cardcontainer from './components/Cardcontainer';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import './App.css'
function App() {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Cardcontainer />
      <Carousel />
      <Footer />
      </>
    
  );
}

export default App;
