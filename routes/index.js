var express = require('express');
var router = express.Router();

const greetings = ["I love you", "You're brilliant", "You're wonderful", "You're so fantastic", "Your sense of humour tickles me"];
let chosenGreeting = greetings[Math.floor(Math.random() * greetings.length)];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nice Horse!', greeting: chosenGreeting });
});

module.exports = router;
