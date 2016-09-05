import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

const Navigation = (props) => {
  return (
    <ul>
      <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
      <li><Link to="/addcomment" activeClassName="active">Add Comment</Link></li>
    </ul>
  );
}

export default Navigation;
