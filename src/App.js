import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Security from './components/security';
import About from './components/About';
import AppExchange from './components/AppExchange';
import Contact from './components/Contact';
import Experience from './components/Experience';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="home"><Home /></section>
      <section id="projects"><Security /></section>
      <section id="about"><About /></section>
      <section id="experience"><Experience /></section>
      <section id="appexchange"><AppExchange /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}

export default App;
