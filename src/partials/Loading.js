import React, { Component } from 'react';
import loading from '../img/circles.svg'

export default class Loading extends Component {
  render() {
    return (
      <div className={this.props.fade ? "loading fade" : "loading"}>
        <div className="center">
          <img src={loading} alt="Loading" className="loading-icon"/>
          <h3 className="rosewood">LOADING</h3>
        </div>
      </div>
    )
  }
}
