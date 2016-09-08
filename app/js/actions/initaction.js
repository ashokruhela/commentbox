import ActionType from 'ActionTypes';
import AppDispatcher from 'Dispatcher';
import CommentApi from 'commentApi';

var InitializeActions = {
  initApp: function() {
    AppDispatcher.dispatch({
      actionType: ActionType.INITIALIZE,
      initialData: {
        message: 'Hello'
        }
      })
    }
  }

  module.exports = InitializeActions;
