import React, { Component } from 'react';
import { Parallax } from 'react-parallax';

export default class ImageContainer extends Component {
  styleFromImage(image){
    return {
      backgroundImage: `url(${image})`
    };
  }

  render() {
    if (this.props.image){
      return (
        <Parallax bgImage={this.props.image.fields.file.url} className="mainImage" bgHeight="100vh"/>
      );
    } else {
      return null;
    }
  }
}
