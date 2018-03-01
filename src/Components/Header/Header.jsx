import React, { Component } from 'react';


class Header extends Component {
  // Can't change state here - setState()
  render() {
    return (
      <div className="header-wrapper">
        <img className="person1" src="img/person.png" alt="Person Icon" />
        <p className="contactNumber">
          <a title="Kontakt" href="tel:+381648949085">Kontakt telefon: <span className="number">+381 64 8949085</span></a>
        </p>
        <a title="Facebook stranica" href="https://www.facebook.com/InDoor-246674172152061" target="_blank" rel="noopener noreferrer" className="contactFacebook">
          <img alt="Facebook" src="img/contactFacebook90x30.png" />
        </a>
        <a title="Agencija za izradu softwera" href="https://nanosoft.ls.rs" target="_blank" rel="noopener noreferrer" className="nanosoftLink">
          <img alt="Nanosoft" src="img/nanosoft90x30.png" />
        </a>
        <a title="Beoleks - bela tehnika" href="http://www.beoleks.rs" target="_blank" rel="noopener noreferrer" className="beoleksLink">
          <img alt="Beoleks" src="img/leksgroup90x30.png" />
        </a>
      </div>
    );
  }
}

export default Header;
