import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';  
import Footer from './components/Footer'; 
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <Router>
      <div id="root">
        <Header />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;