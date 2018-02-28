import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  // Can't change state here - setState()
  render() {
    return (
      <div className="navbar-wrapper">
        <div className="container-fullwidth">

        <nav className="navbar navbar-inverse navbar-static-top navBar">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar" title="Otvorite meni">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="index.html"><img alt="InDoor" src="img/logo/logo-black.png" /></a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav navA">
                <li className="navActive"><a className="navbarLink" href="index.html">Po&#x10D;etna</a></li>
                <li><a href="kuhinje.html">Kuhinje</a></li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Plakari <span className="glyphicon glyphicon-th-list"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="plakari-klizni.html">Plakari sa kliznim vratima</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="standardni_plakari.html">Standardni plakari</a></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Sobe <span className="glyphicon glyphicon-th-list"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="dnevne_sobe.html">Dnevne sobe</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="decije_sobe.html">De&#x10D;ije sobe</a></li>
                  </ul>
                </li>
                <li><a href="adaptacije.html">Adaptacije</a></li>
                <li><a href="kontakt.html" className="navbarKontakt">Kontakt</a></li>
              </ul>
              <ul className="ulDropLinkovi">
                <li><span className="dropDot1"></span><a title="Facebook stranica" href="https://www.facebook.com/InDoor-246674172152061" target="_blank" rel="noopener noreferrer"><img alt="Facebook" src="img/contactFacebook90x30.png" /></a><span className="dropDot1"></span></li>
                <li><span className="dropDot2"></span><a title="Agencija za izradu softwera" href="https://nanosoft.ls.rs" target="_blank" rel="noopener noreferrer"><img alt="Nanosoft" src="img/nanosoft90x30.png" /></a><span className="dropDot2"></span></li>
                <li><span className="dropDot3"></span><a title="Beoleks - bela tehnika" href="http://www.beoleks.rs" target="_blank" rel="noopener noreferrer"><img alt="Beoleks" src="img/leksgroup90x30.png" /></a><span className="dropDot3"></span></li>
              </ul>
            </div>
          </div>
        </nav>

        </div>
      </div>
    );
  }
}

export default Navbar;
