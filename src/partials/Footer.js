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
                80 Ricketts Mill Rd.<br />
                Elkton, Maryland 21921
              </p>
            </div>
            <div className="six columns">
              <p>
                <b>Phone</b><br />
                (###) ###-####
              </p>
              <p>
                <b>Email</b><br />
                info@rosewoodfarms.com
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
