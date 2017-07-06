import React, { Component } from 'react';
import { Markdown } from 'react-showdown';
import { NavLink } from 'react-router-dom';

export default class FeaturesContainer extends Component {
  render() {
    return (
      <div className="container features">
        <div className="row">
          <div className="six columns">
            <Markdown markup={ this.props.feature1 } />
            { this.props.link1 &&
            <NavLink to={ this.props.link1 } >
              Learn More >
            </NavLink>
            }
          </div>
          <div className="six columns">
            <Markdown markup={ this.props.feature2 } />
            { this.props.link2 &&
            <NavLink to={ this.props.link2 } >
              Learn More >
            </NavLink>
            }
          </div>
        </div>
      </div>
    )
  }
}
