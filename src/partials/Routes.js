import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import Home from './Home';
import About from './About';
import BasicPage from './BasicPage';
import Gallery from './Gallery';
import VisitUs from './VisitUs';
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
          () => (<BasicPage data={this.getProps(this.props.data, 'Weddings')}/>)
        }/>
        <Route path="/events" component={
          () => (<BasicPage data={this.getProps(this.props.data, 'Private Events')}/>)
        }/>
        <Route path="/gallery" component={
          () => (<Gallery data={this.getProps(this.props.data, 'Gallery')}/>)
        }/>
        <Route path="/vendors" component={
          () => (<BasicPage data={this.getProps(this.props.data, 'Vendors')}/>)
        }/>
        <Route path="/faq" component={
          () => (<BasicPage data={this.getProps(this.props.data, 'FAQ')}/>)
        }/>
        <Route path="/visit" component={
          () => (<VisitUs data={this.getProps(this.props.data, 'Visit Us')}/>)
        }/>
        <Route component={Construction}/>
      </Switch>
    )
  }
}
