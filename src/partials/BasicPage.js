import React, { Component } from 'react';
import TextContainer from './components/TextContainer';
import ImageContainer from './components/ImageContainer';
import FeaturesContainer from './components/FeaturesContainer';

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
        { data.textFeature1 && data.textFeature2 &&
        <FeaturesContainer
          feature1={data ? data.textFeature1 : 'Loading...'}
          link1="/gallery"
          feature2={data ? data.textFeature2 : 'Loading...'}
          link2="/vendors"
        />
        }
      </div>
    )
  }
}
