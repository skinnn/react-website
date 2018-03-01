import React, { Component } from 'react';


class Kontakt extends Component {
  // Can't change state here - setState()
  render() {
    return (
      <section id="contact" className="content-section text-center">
        <div className="contact-section">
            <div className="container contactContainer">
              <img src="img/mail.png" className="contactImage" alt="Contact" />
              <h1 className="contactHeadings">Kontaktirajte nas</h1>
              <p className="postavitePitanja">Slobodno nam postavite bilo kakva pitanja u vezi posla ili web prezentacije. Posetite i na&scaron;u <a href="https://www.facebook.com/InDoor-246674172152061" target="_blank" rel="noopener noreferrer" className="fb">Facebook</a> stranicu.</p>
              <div className="row">
                <div className="col-md-8 col-md-offset-2">
                  <form className="form-horizontal" action="mail.php" name="forma_mail" method="post">
                    <div className="form-group">
                      <label htmlFor="inputName">Ime i prezime</label>
                      <input type="text" name="ime" className="form-control contactName" id="inputName" placeholder="Unesite vaše ime i prezime" />
                    </div>
                    <div className="form-group ">
                      <label htmlFor="inputText">Tekst poruke</label>
                     <textarea name="text" className="form-control msg" placeholder="Poruka"></textarea>
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputCustomerEmail">Va&scaron; E-mail</label>
                      <input type="text" name="email" className="form-control customerEmail" id="inputCustomerEmail" placeholder="mail@example.com" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputPhone">Va&scaron; telefon</label>
                      <input type="text" name="telefon" className="form-control customerPhone" id="inputPhone" placeholder="Unesite vaš broj telefona" />
                    </div>
                    <p><input type="submit" id="dugme" value="Po&scaron;alji" /></p>
                  </form>


                    <h3 className="nasaFB">Na&scaron;a Facebook stranica</h3>
                  <ul className="list-inline banner-social-buttons">
                    <li><a href="https://www.facebook.com/InDoor-246674172152061" target="_blank" rel="noopener noreferrer" className="btn btn-default btn-lg"><i className="fa fa-facebook"> <span className="network-name">Facebook</span></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
      </section>
    );
  }
}

export default Kontakt;
