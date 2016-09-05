var commentApi = {
  getComments: function() {

    return fetch('/api/comments', {
      method: 'Get',
      headers: new Headers({
    		'Content-Type': 'application/json'
    	})
    }).then(function(response) {
      return response.json();
    }).catch(function(res) {
      return res.error();
    });

  }
};

module.exports = commentApi;
