//import react library with common.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Route } from 'react-router';

//browser history
import { createHistory } from 'history';

import App from "./components/App";
import StorePicker from "./components/StorePicker";
import NotFound from "./components/NotFound";

//routes
var routes = (
  <Router history={createHistory()}>
    <Route path="/" component={StorePicker} />
    <Route path="/store/:storeId" component={App} />
    <Route path="*" component={NotFound} />
  </Router>
)

ReactDOM.render(routes, document.querySelector('#main'));