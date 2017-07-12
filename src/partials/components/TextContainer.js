import React, { Component } from 'react';
import { Markdown } from 'react-showdown';

export default class TextContainer extends Component {
  render() {
    let nameClasses = "rosewood u-caps"
    if (this.props.isTitle){
      nameClasses += " mainTitle"
    }
    if (this.props.pretitle || this.props.title || this.props.content){
    return (
        <div className="container container-border">
          <h1 className={nameClasses}>
            { this.props.pretitle &&
              <span className="mainPreTitle">{this.props.pretitle}</span>
            }
            <b>{this.props.title}</b>
          </h1>
          { this.props.content &&
          <div className="mainDescription">
            <Markdown markup={ this.props.content } />
          </div>
          }
        </div>
      );
    } else {
      return null;
    }
  }
}
