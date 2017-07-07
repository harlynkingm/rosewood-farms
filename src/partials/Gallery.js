import React, { Component } from 'react';
import TextContainer from './components/TextContainer';
import ImageContainer from './components/ImageContainer';

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      activePhoto: ''
    }
    this.renderGalleryImages = this.renderGalleryImages.bind(this);
    this.toggleActive = this.toggleActive.bind(this);
  }

  renderGalleryImages(galleryImage, index){
    let image = galleryImage.fields.file.url;
    let passActive = this.changeActive.bind(this, image);
    return(
      <div className="gallery-image" key={index} onClick={passActive}>
        <div className="gallery-image-child" style={this.styleFromImage(image)}>
        </div>
      </div>
    )
  }

  changeActive(newPhoto){
    this.setState({
      activePhoto: newPhoto,
      modal: true
    });
  }

  styleFromImage(image){
    return {
      backgroundImage: `url(${image})`
    };
  }

  disableScroll(){
    document.getElementById('body').classList.add('disableScroll');
  }

  enableScroll(){
    document.getElementById('body').classList.remove('disableScroll');
  }

  toggleActive(){
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    let data = this.props.data;
    let classes = this.state.modal ? 'centerPhotoBack active' : 'centerPhotoBack inactive';
    if (this.state.modal){
      this.disableScroll();
    } else {
      this.enableScroll();
    }
    return (
      <div className="gallery">
        <div className={classes} onClick={this.toggleActive}>
          <img alt="Feature" className="centerPhoto" src={this.state.activePhoto}/>
        </div>
        <ImageContainer image={data.mainPhoto.fields.file.url}/>
        <TextContainer
          pretitle={data.pretitle}
          title={data.title}
          content={data ? data.pageContent : 'Loading...'}
          isTitle = {true}
        />
        <div className="gallery-photos container">
          {data.gallery.map(this.renderGalleryImages)}
        </div>
      </div>
    )
  }
}
