import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import App from './App';
import Contact from './components/Contact'
import Home from './components/Main'
import Skills from './components/Section'
import About from './components/About'

ReactDOM.render(
    <Router>
        <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/main' element={<Home/>}/>
          <Route path='/section' element={<Skills/>}/>
          <Route path='/about' element={<About/>}/>
      
          
        </Routes>
    </Router>,
  document.getElementById('root')
);

