import React, { Component } from 'react';
import Contact from './Contact';
import TextContainer from './components/TextContainer';
import ImageContainer from './components/ImageContainer';

export default class Home extends Component {

  render() {
    //console.log(this.props);
    let data = this.props.data;
    return (
      <div className="home">
        <ImageContainer image={data.mainPhoto}/>
        <TextContainer
          pretitle={data.pretitle}
          title={data.title}
          content={data ? data.pageContent : 'Loading...'}
          isTitle = {true}
        />
        <ImageContainer image={data.secondaryPhoto}/>
        <TextContainer
          title="Watch Us Grow"
          content={data ? data.pageContentSecondary : 'Loading...'}
        />
        <Contact />
      </div>
    )
  }
}
