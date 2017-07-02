import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container container-border">
          <div className="row">
            <div className="six columns">
              <p>
                <i>Contact Us</i>
              </p>
              <p>
                <b>Address</b><br />
                ### Street Name St.<br />
                City, State ZipCode
              </p>
            </div>
            <div className="six columns">
              <p>
                <b>Phone</b><br />
                (###) ###-####
              </p>
              <p>
                <b>Email</b><br />
                email@emailplace.com
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
