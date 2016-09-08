import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';
import Comment from 'Comment';
import AddComment from 'AddComment';
import CommentList from 'CommentList';
import commentApi from 'commentApi';
import {Link} from 'react-router';
import CommentStore from 'CommentStore';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    }
  }

  handleChange() {
    alert('handle change called');
  }

  componentWillMount() {
    console.log('will mount called');
    console.log(CommentStore);
    CommentStore.addListener('change', this.handleChange);
  }

  componentDidMount() {
    var self = this;
    CommentStore.getComments().then(function(comments) {
      self.setState({
        comments: comments
      })
    });
  }

  componentWillUnmount() {
    CommentStore.removeEventListener('change', this.handleChange);
  }

  render() {
      return (
        <Grid>
          <h1>All comments page</h1>
          <CommentList comments= {this.state.comments}/>
          <Link to="addcomment">Add Comment</Link>
        </Grid>
      );
  }
}

export default CommentBox;
