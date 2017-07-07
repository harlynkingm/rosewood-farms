import React, { Component } from 'react';
import TextContainer from './components/TextContainer';
import ImageContainer from './components/ImageContainer';

export default class BasicPage extends Component {
  render() {
    let data = this.props.data;
    return (
      <div className="basicPage" id={data.pageTitle}>
        <ImageContainer image={data.mainPhoto.fields.file.url}/>
        <TextContainer
          pretitle={data.pretitle}
          title={data.title}
          content={data ? data.pageContent : 'Loading...'}
          isTitle = {true}
        />
        <div className="container">
          <iframe
            width="100%"
            height="300"
            frameBorder="0"
            title="Map"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBxIfDIM31KjK_tA8snt_ZqDN5mNpxP2d0&q=80+Ricketts+Mill+Rd,Elkton+MD&maptype=satellite" allowFullScreen>
          </iframe>
        </div>
      </div>
    )
  }
}
