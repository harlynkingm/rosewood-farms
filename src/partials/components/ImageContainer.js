import React, { Component } from 'react';
import { Parallax } from 'react-parallax';

export default class ImageContainer extends Component {

  render() {
    if (this.props.image){
      return (
        <Parallax bgImage={this.props.image.fields.file.url} className="mainImage" bgHeight="100vh" strength={400}/>
      );
    } else {
      return null;
    }
  }
}
