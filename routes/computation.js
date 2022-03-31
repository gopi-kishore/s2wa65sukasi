var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const x= req.query.x || getRandomArbitrary(0, 60);
  var y1 = Math.atan(x);
  var y2 = Math.exp(x);
  var y3 = Math.expm1(x);
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  res.send(`Math.atan(${x}) is ${y1} ; Math.exp(${x}) is ${y2} ; Math.expm1(${x}) is ${y3}\n`);
});

module.exports = router;