var models = require('../models');
var bluebird = require('bluebird');


module.exports = {
  messages: {
    get: function (req, res) {
      console.log(req);
      console.log('controller get called');
      models.messages.get( function(data){
        res.send(data);
      });


    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('model get called');
      models.messages.post(req.body, function(){
        res.send('post received!');
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

