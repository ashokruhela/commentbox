import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import Comment from 'Comment';

class CommentList extends Component {
  render(){
    var commentsNode = this.props.comments.map(function(comment){
      return <Comment key={comment.id} author= {comment.author}>{comment.text}</Comment>;
    });
    return (
      <Table>
        <thead>
          <tr>
            <th>author</th>
            <th>comment</th>
          </tr>
        </thead>
        <tbody>
          {commentsNode}
        </tbody>
      </Table>
    );
  }
}

export default CommentList;
