import React, { Component } from 'react';
import { Markdown } from 'react-showdown';
import Contact from './Contact';

export default class Home extends Component {

  styleFromImage(image){
    return {
      backgroundImage: `url(${image})`
    };
  }

  render() {
    console.log(this.props);
    let data = this.props.data;
    let image1 = null;
    let image2 = null;
    if (data){
      image1 = data.mainPhoto.fields.file.url;
      image2 = data.secondaryPhoto.fields.file.url;
    }
    return (
      <div className="home">
        <div className="mainImage" style={this.styleFromImage(image1)}></div>
        <div className="container container-border">
          <h1 className="mainTitle u-caps">
            <span className="mainPreTitle">Welcome to</span>
            <br />
            <b>Rosewood Farms</b>
          </h1>
          <div className="mainDescription">
            <Markdown markup={ data ? data.pageContent : 'Loading...' } />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="four columns">
              <Markdown markup={ data ? data.textFeature1 : 'Loading...' } />
            </div>
            <div className="four columns">
              <Markdown markup={ data ? data.textFeature2 : 'Loading...' } />
            </div>
            <div className="four columns">
              <Markdown markup={ data ? data.textFeature3 : 'Loading...' } />
            </div>
          </div>
        </div>
        <div className="mainImage" style={this.styleFromImage(image2)}></div>
        <Contact />
      </div>
    )
  }
}
