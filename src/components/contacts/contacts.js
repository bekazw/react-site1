import React, { Component } from 'react';
import './contacts.css';

export default class Contacts extends Component {
  render() {
    return (
      <div className="contacts">
          <div id="con_pic0"></div>
          <p id="con_0_0">London, Pawel, 12B/A</p>
          <div id="con_pic1"></div>
          <p id="con_0_1">(012)345 678</p>
          <div id="con_pic2"></div>
          <p id="con_0_2">contact@email.com</p>
          <p id="con_0_3">www.website.com</p>
      </div>
    );
  }
};
