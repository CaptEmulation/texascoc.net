/* eslint-env browser */
import 'bootstrap/dist/css/bootstrap.min.css';
import '../less/main.less';
import React from 'react';
import { render } from 'react-dom';
import { IndexRedirect, Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import store from './store';
import About from './views/About';
import Discord from './views/Discord';
import Contents from './views/Contents';

global.jQuery = require ('jquery');
require ('bootstrap')

const history = syncHistoryWithStore(hashHistory, store);

window.onload = () => {
  render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Contents}>
          <IndexRedirect to="/discord" />
          <Route path="about" component={About} />
          <Route path="discord" component={Discord} />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('root'),
  );
};
