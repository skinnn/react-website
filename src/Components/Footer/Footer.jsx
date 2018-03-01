import React, { Component } from 'react';
// import './Footer.css';

class Footer extends Component {
  // Can't change state here - setState()
  render() {
    return (
      <footer>
        <div>
          <p className="footerCopyright"><span className="copyrightAndYear">Copyright &copy; 2017 by</span></p>
            <img className="footerImg" alt="InDoor Copyright" src="img/indoorCopyright120x30-grey.png" />
        </div>
        <div className="allFooterLinks">
          <a href="index.html" className="footerLink">Po&#x10D;etna <span className="whiteDot">&#183;</span>
          </a>
          <a href="kuhinje.html" className="footerLink"> Kuhinje<span className="whiteDot"> &#183;</span>
          </a>
          <a href="adaptacije.html" className="footerLink"> Adaptacije <span className="whiteDot">&#183;</span>
          </a>
          <a href="kontakt.html" className="footerLink"> Kontakt <span className="whiteDot">&#183;</span>
          </a>
          <a href="https://www.facebook.com/InDoor-246674172152061" className="footerLink" target="_blank" rel="noopener noreferrer"> Facebook stranica</a>
        </div>
      </footer>
    );
  }
}

export default Footer;
