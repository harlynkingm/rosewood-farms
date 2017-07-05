import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Construction from './Construction';

export default class Routes extends Component {
  getProps(data, pageTitle){
    return data.filter(function(page){
      return page.pageTitle === pageTitle;
    })[0];
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={
          () => (<Home data={this.getProps(this.props.data, 'Home')}/>)
        }/>
        <Route path="/about" component={
          () => (<About data={this.getProps(this.props.data, 'About')}/>)
        }/>
        <Route component={Construction}/>
      </Switch>
    )
  }
}
