import {assign} from 'es6-object-assign';
import {EventEmitter} from 'events';
import ActionType from 'ActionTypes';
import AppDispatcher from 'Dispatcher';
import commentApi from 'commentApi';

var _comments = [];
var CommentStore = assign({}, EventEmitter.prototype, {
  addListener: function(eventName, cb) {
    console.log('add listener called');
    this.on(eventName, cb);
  },
  removeEventListener: function(eventName, cb){
    this.removeListener(eventName, cb);
  },
  emitChange: function(event) {
    console.log('emit changed called');
    this.emit(event);
  },
  getComments: function() {
    return commentApi.getComments();
  }
});

AppDispatcher.register(function(action){
  console.log(action.actionType + ' raised')
  switch (action.actionType) {
    case ActionType.INITIALIZE:
      CommentStore.emitChange('change');
      break;
    case ActionType.ADD_COMMENT:
      CommentStore.emitChange('change');
    default:

  }
});

module.exports = CommentStore;
