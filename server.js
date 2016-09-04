var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');
var COMMENT_FILE = path.join(__dirname, 'comments.json');

var app = express();

app.set('port', process.env.PORT| 3000)

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.get('/api/comments', function(req, res) {
    fs.readFile(COMMENT_FILE, function(err, data) {
      if(err) {
        console.error(err);
        process.exit(1);
      } else {
        console.log(JSON.parse(data));
        res.json(data);
      }
    });
});

app.listen(app.get('port'), function(){
    console.log('application started on port ' +  app.get('port') + '/');
})
