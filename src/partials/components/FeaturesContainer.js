import React, { Component } from 'react';
import { Markdown } from 'react-showdown';

export default class FeaturesContainer extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="six columns">
            <Markdown markup={ this.props.feature1 } />
          </div>
          <div className="six columns">
            <Markdown markup={ this.props.feature2 } />
          </div>
        </div>
      </div>
    )
  }
}
