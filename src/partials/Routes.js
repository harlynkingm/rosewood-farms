import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Weddings from './Weddings';
import PrivateEvents from './PrivateEvents';
import Gallery from './Gallery';
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
        <Route path="/weddings" component={
          () => (<Weddings data={this.getProps(this.props.data, 'Weddings')}/>)
        }/>
        <Route path="/private-events" component={
          () => (<PrivateEvents data={this.getProps(this.props.data, 'Private Events')}/>)
        }/>
        <Route path="/gallery" component={
          () => (<Gallery data={this.getProps(this.props.data, 'Gallery')}/>)
        }/>
        <Route component={Construction}/>
      </Switch>
    )
  }
}
