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
        <ImageContainer image={data.mainPhoto.fields.file.url}/>
        <TextContainer
          pretitle={data.pretitle}
          title={data.title}
          content={data ? data.pageContent : 'Loading...'}
          isTitle = {true}
        />
        { data.secondaryPhoto &&
          <ImageContainer image={data.secondaryPhoto.fields.file.url}/>
        }
        <TextContainer
          title="Watch Us Grow"
          content={data ? data.pageContentSecondary : 'Loading...'}
        />
        <Contact />
      </div>
    )
  }
}
