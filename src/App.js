import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {createClient} from 'contentful';
import './css/normalize.css';
import './css/skeleton.css';
import './css/index.css';
import Header from './partials/Header';
import Footer from './partials/Footer';
import Loading from './partials/Loading';
import Routes from './partials/Routes';

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

  render() {
    if (this.state.data.length){
      return (
        <Router onUpdate={() => window.scrollTo(0, 0)}>
          <div>
            <Loading fade={true}/>
            <Header />
            <Routes data={this.state.data}/>
            <Footer />
          </div>
        </Router>
      );
    } else {
      return (
        <Loading fade={false}/>
      )
    }
  }
}

export default App;
