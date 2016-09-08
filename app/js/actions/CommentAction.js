import ActionType from 'ActionTypes';
import AppDispatcher from 'Dispatcher';
import CommentApi from 'commentApi';

var CommentActions = {
  AddCommentAction: function() {
    AppDispatcher.dispatch({
      actionType: ActionType.ADD_COMMENT
      })
    }
  }

module.exports = CommentActions;
