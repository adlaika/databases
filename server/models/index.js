var db = require('../db/index.js');


module.exports = {
  messages: {
    get: function (callback) {
      console.log('models get called');
      var data = db.dbConnection.query('select * from messages;', function(err, data) {
        db.dbConnection.end();
        if(!err){
          callback(data);
          console.log(data);
        }else{
          console.log(err);
        }
      });
      // console.log('data:', data);
      // callback(data);
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

