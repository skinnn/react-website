import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'


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
              <Link className="navbar-brand" to="/"><img alt="InDoor" src="img/logo/logo-black.png" /></Link>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav navA">
                <li className="navActive"><Link to="/" style={{color: '#f0670c'}}>Po&#x10D;etna</Link></li>

                <li><Link to="/Kuhinje" style={{color: '#f0670c'}}>Kuhinje</Link></li>

                <li className="dropdown">
                  <Link to="#" style={{color: '#f0670c'}} className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Plakari <span className="glyphicon glyphicon-th-list"></span></Link>
                  <ul className="dropdown-menu">
                    <li><Link to="/Klizni_plakari">Plakari sa kliznim vratima</Link></li>
                    <li role="separator" className="divider"></li>
                    <li><Link to="/Standardni_plakari">Standardni plakari</Link></li>
                  </ul>
                </li>

                <li className="dropdown">
                  <Link style={{color: '#f0670c'}} to="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Sobe <span className="glyphicon glyphicon-th-list"></span></Link>
                  <ul className="dropdown-menu">
                    <li><Link to="/Dnevne_sobe">Dnevne sobe</Link></li>
                    <li role="separator" className="divider"></li>
                    <li><Link to="/Decije_sobe">De&#x10D;ije sobe</Link></li>
                  </ul>
                </li>

                <li><Link style={{color: '#f0670c'}} to="/Adaptacije">Adaptacije</Link></li>
                <li><Link style={{color: '#f0670c'}} to="/Kontakt" className="navbarKontakt">Kontakt</Link></li>
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
