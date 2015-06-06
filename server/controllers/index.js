var models = require('../models');
var bluebird = require('bluebird');


module.exports = {
  messages: {
    get: function (req, res) {
      console.log('controller get called');
      models.messages.get( function(data){
        // console.log('data: ', data);
        res.send(data);


        // function (err, data) {
        // if (err) {
        //   console.error(err);
        // } else {
        //   console.log('data received: ' + data);
        //   res.send(data);
        // }
      });


    }, // a function which handles a get request for all messages
    post: function (req, res) {

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

