import React from 'react'
import { Link } from 'react-router-dom'
import { useDarkMode } from './DarkModeContext';


function Navbar() {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    document.body.style.backgroundColor = isDarkMode ? '#1e1e1e' : 'white';
    document.body.style.color = isDarkMode ? 'white' : 'black';
  return (
    <div> 
       <nav className={`navbar ${isDarkMode ? 'bg-dark' : 'bg-secondary'} navbar-expand-lg`} data-bs-theme={isDarkMode ? 'dark' : ''}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" id='name'>iPo</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-4 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link "   to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">Dasboard</Link>
        </li>
        
       
      </ul>
      <button className={`btn btn-${isDarkMode ? 'light' : 'dark'}`} onClick={toggleDarkMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar