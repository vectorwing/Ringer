import React from 'react';
import logo from '../logo.svg'
import './Intro.css'

function Intro() {
  return(
    <header className="Intro">
      <img src={logo} className="Intro-logo" alt="logo" />
      <p>
        You gonna make some killer apps or not, huh? Come on, get moving!
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        ayyy lmao
      </a>
    </header>
  );
}

export default Intro;