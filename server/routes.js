var controllers = require('./controllers');
var router = require('express').Router();

for (var route in controllers) {
  router.route("/" + route)
    .get(controllers[route].get)
    .post(controllers[route].post);
}

// router.get('/', function(req, res) {
//   console.log('homepage');
//   router.get(controllers.messages.get);
// })
module.exports = router;

