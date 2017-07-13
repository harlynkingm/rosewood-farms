import React, { Component } from 'react';
import Waypoint from 'react-waypoint';

export default class AnimateWrapper extends Component {
  constructor(props){
    super(props);
    this.state = {
      active: false
    };
    this.setActive = this.setActive.bind(this);
  }

  setActive(){
    this.setState({
      active: true
    });
  }

  render() {
    let classes = "animatewrapper";
    if (this.state.active) classes += " active";
    return (
      <Waypoint onEnter={this.setActive}>
        <div className={classes}>
          { this.props.children }
        </div>
      </Waypoint>
    )
  }
}
