import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';
import Comment from 'Comment';
import AddComment from 'AddComment';
import CommentList from 'CommentList';
import commentApi from 'commentApi';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    }
  }

  componentDidMount() {
    this.setState({
      comments: commentApi.getComments()
    })
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

export default App;
