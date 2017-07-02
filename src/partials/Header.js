import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <NavLink to="/">
          <img src={logo} className="header-logo" alt="Rosewood Farms"/>
        </NavLink>
        <ul className="header-links">
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
