import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import './index.css';
import App from './App';
import Home from './Home';
import ListPage from './ListPage';
import DetailPage from './DetailPage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Home}>
      <IndexRoute component={ListPage} />
      <Route path="/detail/:itemId" component={DetailPage} />
    </Route>
  </Router>, document.getElementById('root'));
registerServiceWorker();
