var db = require('../db/index.js');
var _ = require('underscore');


module.exports = {
  messages: {
    get: function (callback) {
      console.log('models get called');
      var data = db.dbConnection.query('select * from messages;', function(err, data) {
        if(!err){
          for (var i = 0; i< data.length; i++){
            for(var key in data[i]){
              data[i][key] = _.unescape(data[i][key]);
            }
          }
          callback(data);
          console.log('this is data from the get request');
          console.log(data);
        }else{
          console.log(err);
        }
      });
      // console.log('data:', data);
      // callback(data);
    }, // a function which produces all the messages
    post: function (body, callback) {
      //insert body into database
      // var username = _.unescape(body.username);
      // var text = _.unescape(body.text);
      var data = db.dbConnection.query("insert into messages (username, text) values('" + body.username + "','" + body.text+"');" , function(err, data) {
        if(!err){
          callback();
          console.log(data);
        }else{
          console.log(err);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

