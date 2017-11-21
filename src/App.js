import React, { Component } from 'react';
import './App.css';

import Head from "./components/head/head";
import Logo from "./components/logo/logo";
import Headline from "./components/headline/headline";
import Mask from "./components/mask/mask";
import Footer from "./components/footer/footer";
import Contacts from "./components/contacts/contacts";
import Line from "./components/line/line";

class App extends Component {
  render() {
    return (
      <div className="main">
        <Head />
        <Logo />
        <Headline />
        <Mask />
        <Footer />
        <Contacts />
        <Line />     
      </div>
    );
  }
}

export default App;
