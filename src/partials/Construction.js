import React, { Component } from 'react';
import warning from '../img/warning.png';

export default class Construction extends Component {
  render() {
    return (
      <div className="construction">
        <div className="container container-border">
          <img src={warning} alt="Alert"/>
          <h1>
            This page is currently under construction.<br />
            Come back soon!
          </h1>
        </div>
      </div>
    )
  }
}
