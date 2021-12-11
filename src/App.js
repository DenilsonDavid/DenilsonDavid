import './App.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import Home from './containers/Home/Home';
import Modal from './components/Modal/Modal';
import Search from './containers/Search/Search';
import Order from './containers/Order/Order';
import Feedback from './containers/Feedback/Feedback';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Layout>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/services' component={Modal} />
            <Route path='/brandplus' component={Modal} />
            <Route path='/store' component={Modal} />
            <Route path='/ola' component={Modal} />
            <Route path='/blog' component={Modal} />
            <Route path='/contacts' component={Modal} />
            <Route path='/search' component={Search} />
            <Route path='/cart' component={Modal} />
            <Route path='/order' component={Order} />
            <Route path='/feedback' component={Feedback} />
          </Switch>
        </Layout>
      </div>
    );
  }
}