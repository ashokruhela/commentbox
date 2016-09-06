import React from 'react';
import ReactDOM from 'react-dom';
import App from 'MainApp';
import AddComment from 'AddComment';
import CommentBox from 'CommentBox';
import NotFound from 'NotFound';
import EditComment from 'EditComment';
import {Route, Router, hashHistory, browserHistory, IndexRoute} from 'react-router';

const routes = {
  path: '/',
  component: App,
  indexRoute: {component: CommentBox},
  redirect: '/addcomment',
  childRoutes: [
    {
      path:'addcomment',
      component: AddComment
    },
    {
      path:'editcomment',
      component: EditComment
    }
  ]
};

ReactDOM.render(
  <Router history= {hashHistory} routes= {routes} />
  , document.getElementById('app'));

// ReactDOM.render(
//   <Router history= {hashHistory}>
//       <Route path="/" component={App}>
//           <IndexRoute component={CommentBox}/>
//           <Route path="addcomment" component = {AddComment}/>
//           <Route path="*" component={NotFound}/>
//       </Route>
//    </Router>
//   , document.getElementById('app'));
