import React, { Component } from 'react';
import { Markdown } from 'react-showdown';

export default class Home extends Component {

  styleFromImage(image){
    return {
      backgroundImage: `url(${image})`
    };
  }

  render() {
    console.log(this.props);
    let image1 = null;
    let image2 = null;
    let text = null;
    if (this.props.data){
      image1 = this.props.data.mainPhoto.fields.file.url;
      image2 = this.props.data.secondaryPhoto.fields.file.url;
      text = this.props.data.pageContent;
    }
    return (
      <div className="home">
        <div className="mainImage" style={this.styleFromImage(image1)}></div>
        <div className="container container-border">
          <h1 className="mainTitle">
            <span className="mainPreTitle">Welcome to</span>
            <br />
            <b>Rosewood Farms</b>
          </h1>
          <div className="mainDescription">
            <Markdown markup={ text } />
          </div>
        </div>
        <div className="mainImage" style={this.styleFromImage(image2)}></div>
      </div>
    )
  }
}
