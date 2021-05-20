var express = require('express');
var router = express.Router();
var {v4:uuidv4} = require('uuid') 


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

router.get('/draw', function(req, res, next) {
  res.render('draw.html',{title:"Starts.tf"});
});
router.get('/:roomId', function(req, res, next) {
  res.render('draw.html',{ROOMID:req.params.roomId});
});


module.exports = router;
