import React from 'react';
import logo from './logo.svg';
import './App.css';
import LogoBurgandy from './assets/LogoBurgandyTransp.png';
import LogoCoco from './assets/LogoCocoTransp.png';
import LogoCountryGrey from './assets/LogoCountryGreyTransp.png';
import LogoGraphite from './assets/LogoGraphiteTransp.png';
import LogoPalomaGrey from './assets/LogoPalomaGreyTransp.png';
import LogoRodwell from './assets/LogoRodwellTransp.png';
import LogoTilton from './assets/LogoTiltonTransp.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebookSquare } from '@fortawesome/free-solid-svg-icons'

// const element = <FontAwesomeIcon icon={['fab', 'fa-facebook-square']} />

import { faFacebook } from "@fortawesome/free-brands-svg-icons"

const element = <FontAwesomeIcon icon={faFacebook} />

const logoBurgandyUrl = require('./assets/LogoBurgandy.png');

function App() {
  return (
    <div className="App">
      <nav>
        <div className="container">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>
      <div className="container">

        <header className="App-header">
          {/* <img src={LogoBurgandy} alt="" /> */}
          {/* For dark background */}
          <img src={LogoCoco} alt="" />
          {/* <img src={LogoCountryGrey} alt="" /> */}
          {/* For light background */}
          {/* <img src={LogoGraphite} alt="" /> */}
          {/* <img src={LogoPalomaGrey} alt="" />
          <img src={LogoRodwell} alt="" />
          <img src={LogoTilton} alt="" /> */}
          {/* <img src={logo} alt="" />
          <img src={logoBurgandyUrl} alt="" /> */}

        </header>
        <div className="content">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing <span className="highlight">Lorem Ipsum passages</span>, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          <button className="cta-primary">Contact Us</button>
          <button className="cta-secondary">Cancel</button>
        </div>
        <div className="header">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing <span className="highlight">Lorem Ipsum passages</span>, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="content">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing <span className="highlight">Lorem Ipsum passages</span>, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          <button className="cta-primary">Contact Us</button>
          <button className="cta-secondary">Cancel</button>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <div className="footer-links-container">
            <div className="footer-smallprint">
              <ul>
                <li><a href="https://google.com">delivery and returns policy</a></li>
                <li><a href="https://google.com">privacy policy</a></li>
              </ul>
            </div>
            <div className="footer-social">
              {element} Find us on facebook
            </div>


          </div>
          <div className="footer-copyright">© 2020 Simply Spectacular</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
