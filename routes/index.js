var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

router.get('/draw', function(req, res, next) {
  res.render('draw.html',{title:"Starts.tf"});
});


module.exports = router;
