import React, {Component} from 'react';
import {Link} from 'react-router';
import CommentBox from 'CommentBox';
import AddComment from 'AddComment';
import Navigation from 'Navigation';


const App = (props) => {
  return (
    <div>
      <Navigation/>
      {props.children}
    </div>
  );
}

export default App;
