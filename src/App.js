import React,{useState} from 'react';
import './App.scss';
import Header from './components/Header';
import Main from './components/Main'
import Section from './components/Section'
import Works from './components/Works';
import About from './components/About';


function App() {
  return (
    <div className='App'>
      <Header/>
      <Main/>
      <About/>
      <Section/>
      <Works/>
    </div>
  );
}

export default App;
