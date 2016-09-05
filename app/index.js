import React from 'react';
import ReactDOM from 'react-dom';
import App from 'MainApp';
import AddComment from 'AddComment';
import CommentBox from 'CommentBox';
import NotFound from 'NotFound';
import {Route, Router, hashHistory, browserHistory, IndexRoute} from 'react-router';


ReactDOM.render(
  <Router history= {hashHistory}>
      <Route path="/" component={App}>
          <IndexRoute component={CommentBox}/>
          <Route path="addcomment" component = {AddComment}/>
          <Route path="*" component={NotFound}/>
      </Route>
   </Router>
  , document.getElementById('app'));

  // ReactDOM.render(
  //   <App/>
  //   , document.getElementById('app'));
