import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import {createClient} from 'contentful';
import './css/normalize.css';
import './css/skeleton.css';
import './css/index.css';
import Header from './partials/Header';
import Home from './partials/Home';
import Footer from './partials/Footer';
import Construction from './partials/Construction';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.setData = this.setData.bind(this);
  }

  componentDidMount() {
    const client = createClient({
      space: 'zqt8bkjm55gk',
      accessToken: 'c04f771bd32cb81333be0e9d1190e705793d4dc6b4bccbd85c8c10b881107e49'
    })
    client.getEntries().then((entries) => this.setData(
      entries.items.map(function(i) {return i.fields;})
    ));
  }

  setData(data) {
    this.setState({
      data: data
    });
    //console.log(data);
  }

  getProps(data, pageTitle){
    return data.filter(function(page){
      return page.pageTitle === pageTitle;
    })[0];
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
          <Route exact path="/" component={
            () => (<Home data={this.getProps(this.state.data, 'Home')}/>)
          }/>
          <Route component={Construction}/>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
