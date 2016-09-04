import React from 'react';
import ReactDOM from 'react-dom';
import App from 'MainApp';

var onDeleteComponent = function() {
  var removeComponent = document.getElementById('app');
  ReactDOM.unmountComponentAtNode(removeComponent);
}

ReactDOM.render(<App onDeleteComponent={onDeleteComponent}/>, document.getElementById('app'));
