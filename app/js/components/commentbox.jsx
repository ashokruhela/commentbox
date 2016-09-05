import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';
import Comment from 'Comment';
import AddComment from 'AddComment';
import CommentList from 'CommentList';
import commentApi from 'commentApi';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    }
  }

  componentDidMount() {
    var self = this;
    commentApi.getComments().then(function(comments) {
      self.setState({
        comments: comments
      })
    });
  }

  render() {
      return (
        <Grid>
          <h1>All comments page</h1>
          <CommentList comments= {this.state.comments}/>
        </Grid>
      );
  }
}

export default CommentBox;
