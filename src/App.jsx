import React from 'react';
import './App.css';
import ProjectsPage from './components/ProjectsPage';
import ProjectPage from './components/ProjectPage';
import HomePage from './home/HomePage';
import Login from './components/Login';
import Subscribe from './components/Subscribe';
import Contact from './components/Contact';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <header className="sticky">
        <NavLink to="/" >
          <span className='icon-home'></span>
          <button className='Rumah'>Home</button>
        </NavLink>
        <NavLink to="/posts">
          <button className='Rumah'>News</button>
        </NavLink>
        <NavLink to="/Contact">
          <button className='Rumah'>Contact</button>
        </NavLink>
        <NavLink to="/Login">
          <button className='Rumah'>Login</button>
        </NavLink>
        <NavLink to="/Subscribe">
          <button className='Rumah'>Subscribe</button>
        </NavLink>
      </header>

      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<ProjectsPage />} /> 
          <Route path='/posts/:id' element={<ProjectPage />} />
          <Route path='/Login' element={<Login />} />  
          <Route path='/Subscribe' element={<Subscribe />} />
          <Route path='/Contact' element={<Contact />} />    
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
