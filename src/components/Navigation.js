import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import logo from '../logo.PNG'
import nightImage from '../NightMode.png'

function myButton() {
  var click = document.body
  click.classList.toggle("dark-theme")
}

function Navigation(props){
  return(
    <header className ='1-header' id="header">
      <nav class="nav bd-container">
          <Link class="nav__logo" to="/ResearchU">
            <img src={logo} width={300} alt="ResearchU logo" />
          </Link>

          <div className="nav__menu" id="nav-menu">
            <ul class="nav__list">
              <li>
                <button id="theme-button" onClick={myButton}><img src ={nightImage} width={40} alt="NightMode logo"/> </button>
              </li>
              <li
                class={`nav__item  ${
                  props.location.pathname === "/ResearchU" ? "active" : ""
                }`}
              >
                <Link class="nav__link active-link" to="/ResearchU">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav__item  ${
                  props.location.pathname === "/ResearchU/About" ? "active" : ""
                }`}
              >
                <Link class="nav__link" to="/ResearchU/About">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
      </nav>
    </header>
  );
}

export default withRouter(Navigation)