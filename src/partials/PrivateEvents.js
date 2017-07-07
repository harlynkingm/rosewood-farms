import React, { Component } from 'react';
import TextContainer from './components/TextContainer';
import ImageContainer from './components/ImageContainer';

export default class PrivateEvents extends Component {
  render() {
    let data = this.props.data;
    return (
      <div className="privateevents">
        <ImageContainer image={data.mainPhoto.fields.file.url}/>
        <TextContainer
          pretitle={data.pretitle}
          title={data.title}
          content={data ? data.pageContent : 'Loading...'}
          isTitle = {true}
        />
      </div>
    )
  }
}
