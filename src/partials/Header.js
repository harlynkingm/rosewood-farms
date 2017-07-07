import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/new_logo.png';

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      active: false
    };
    this.toggleActive = this.toggleActive.bind(this);
  }

  toggleActive(){
    this.setState({
      active: !this.state.active
    });
  }

  render() {
    return (
      <div className="header">
        <img src={logo} alt="Logo" className="header-logo"/>
        <p className="header-title">
          <NavLink to="/">
            <b>Rosewood</b><br />Farms
          </NavLink>
        </p>
        <div id="menuIcon" onClick={this.toggleActive} className={this.state.active ? 'open' : null}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={this.state.active ? 'header-links open' : 'header-links'}>
          <li><NavLink exact to="/" activeClassName='active'>
            Home
          </NavLink></li>
          <li><NavLink to="/about" activeClassName='active'>
            About
          </NavLink></li>
          <li><NavLink to="/weddings" activeClassName='active'>
            Weddings
          </NavLink></li>
          <li><NavLink to="/private-events" activeClassName='active'>
            Private Events
          </NavLink></li>
          <li><NavLink to="/gallery" activeClassName='active'>
            Gallery
          </NavLink></li>
          <li><NavLink to="/preferred-vendors" activeClassName='active'>
            Preferred Vendors
          </NavLink></li>
          <li><NavLink to="/visit-us" activeClassName='active'>
            Visit Us
          </NavLink></li>
        </ul>
      </div>
    )
  }
}
