import React, { Component } from 'react';

export default class ImageContainer extends Component {
  styleFromImage(image){
    return {
      backgroundImage: `url(${image})`
    };
  }

  render() {
    return (
      <div
        className="mainImage"
        style={this.styleFromImage(this.props.image)}>
      </div>
    )
  }
}
