import React, { Component } from 'react';
import FeaturesContainer from './components/FeaturesContainer';
import TextContainer from './components/TextContainer';
import ImageContainer from './components/ImageContainer';

export default class About extends Component {
  render() {
    let data = this.props.data;
    return (
      <div className="about">
        <ImageContainer image={data.mainPhoto}/>
        <TextContainer
          pretitle={data.pretitle}
          title={data.title}
          content={data ? data.pageContent : 'Loading...'}
          isTitle = {true}
        />
        <FeaturesContainer
          feature1={data ? data.textFeature1 : 'Loading...'}
          link1="/gallery"
          feature2={data ? data.textFeature2 : 'Loading...'}
          link2="/weddings"
        />
      </div>
    )
  }
}
