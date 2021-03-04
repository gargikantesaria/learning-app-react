import React, { Component } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Header from './layouts/header.js';
import Container from './layouts/container.js';
import Footer from './layouts/footer.js';
import './assests/css/ogogo.css';
AOS.init({duration:1000, startEvent: 'load'});
class App extends Component {

  componentDidMount() {
    this.props.hideLoader();
  }
  
  render() {
    return (
      <div>
        {/* Header Menu */}
        <Header />
        {/* Layout */}
        <Container />
        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

export default App;
