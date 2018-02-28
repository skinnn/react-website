import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Carousel from './Components/Carousel/Carousel';
import Footer from './Components/Footer/Footer';

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
      <div className="App">
        <Header />
        <Navbar />
        <Carousel />
        <Footer />

      </div>

    );
  }
}

export default App;
