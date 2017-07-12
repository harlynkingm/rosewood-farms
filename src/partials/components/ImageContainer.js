import React, { Component } from 'react';

export default class ImageContainer extends Component {
  styleFromImage(image){
    return {
      backgroundImage: `url(${image})`
    };
  }

  render() {
    if (this.props.image){
      return (
        <div
          className="mainImage"
          style={this.styleFromImage(this.props.image.fields.file.url)}>
        </div>
      );
    } else {
      return null;
    }
  }
}
