import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// Components
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

// Pages components
import Pocetna from './Pages/Pocetna';
import Kuhinje from './Pages/Kuhinje';
import Kontakt from './Pages/Kontakt';
import DecijeSobe from './Pages/Decije_sobe';
import DnevneSobe from './Pages/Dnevne_sobe';
import KlizniPlakari from './Pages/Klizni_plakari';
import StandardniPlakari from './Pages/Standardni_plakari';
import Adaptacije from './Pages/Adaptacije';

// Style
import './App.css';

class App extends Component {
  // state = {
  //   persons: [
  //     {name: 'Max', age: 28},
  //     {name: 'Manu', age: 29},
  //     {name: 'Stephanie', age: 26}
  //   ]
  // }

  // nameChangedHandler = (event) => {
  //   this.setState({
  //     persons: [
  //       {name: 'Max', age: 28},
  //       {name: event.target.value, age: 29},
  //       {name: 'Stephanie', age: 27}
  //     ]
  //   })
  // }

  // switchNameHandler = (newName) => {
  //   //console.log('Was clicked!');
  //   this.setState({
  //     persons: [
  //       {name: newName, age: 28},
  //       {name: 'Manu', age: 29},
  //       {name: 'Stephanie', age: 27}
  //     ]
  //   })
  // }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Navbar />

          <Route exact path="/" component={Pocetna} />
          <Route exact path="/Kuhinje" component={Kuhinje} />
          <Route exact path="/Adaptacije" component={Adaptacije} />
          <Route exact path="/Kontakt" component={Kontakt} />
          <Route exact path="/Decije_sobe" component={DecijeSobe} />
          <Route exact path="/Dnevne_sobe" component={DnevneSobe} />
          <Route exact path="/Klizni_plakari" component={KlizniPlakari} />
          <Route exact path="/Standardni_plakari" component={StandardniPlakari} />

        <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
