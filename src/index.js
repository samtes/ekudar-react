import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Header from './components/header';
import Home from './components/home';
import ProductShow from './components/product-show';
import ProductsList from './components/products-list';


import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path='/products/:id' component={ ProductShow } />
          <Route path='/products' component={ ProductsList } />
          <Route path='/' component={ Home } />
        </Switch>
      </div>
    </Router>
  </Provider>
  , document.querySelector('.container'));
