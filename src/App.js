import React from 'react';
import './App.css';
import { Contact } from './components/Contact/Contact';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { NavHeader } from './components/NavHeader/NavHeader';
import { HomePage } from './components/Homepage/HomePage';
import { SearherPage } from './components/SearcherPage/SearcherPage';
import { About } from './components/About/About';

function App() {
  return (
    <Router>
      <div className='main-content'>
        <NavHeader />
        
        <Routes>
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/search' element={<SearherPage />} />
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>

      <footer className='footer'>&copy; 2022 by Marharyta Kulinich</footer>
    </Router>
  );
}

export default App;