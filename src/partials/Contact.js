import React, { Component } from 'react';
import AnimateWrapper from './components/AnimateWrapper';

export default class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      active: false
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    this.setState({
      active: !this.state.active
    });
    return true;
  }

  render() {
    if (!this.state.active){
    return (
      <div className="contact container container-border">
        <AnimateWrapper>
        <h1 className="u-caps rosewood"><b>Contact Us</b></h1>
        <form action="https://formspree.io/events@rosewoodfarms.org" method="POST">
          <input className="u-full-width" type="text" placeholder="Your Name" required name="name"/>
          <div className="row">
            <div className="six columns">
              <input className="u-full-width" type="email" placeholder="Your Email" required name="_replyto"/>
            </div>
            <div className="six columns">
              <input className="u-full-width" type="tel" placeholder="Your Phone Number (Optional)" name="phone"/>
            </div>
          </div>
          <input className="u-full-width" type="text" placeholder="Subject" required name="_subject"/>
          <textarea className="u-full-width" type="text" placeholder="Comments" required name="comments"/>
          <button type="submit">Send Mail</button>
        </form>
        </AnimateWrapper>
      </div>
    )
  } else {
    return (
      <div className="contact container container-border">
        <h1>Message Sent!</h1>
      </div>
    )
  }
  }
}
