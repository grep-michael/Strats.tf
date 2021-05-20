var express = require('express');
var router = express.Router();
var {v4:uuidv4} = require('uuid') 


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});
router.get('/makeRoom/:mapName', function(req, res, next) {
  //create new room
  res.redirect(`/${uuidv4()}/req.params.mapName`)
  res.render('draw.html',{ROOMID:uuidv4(),MapName:req.params.mapName});
});

//router.get('/draw', function(req, res, next) {
//  res.render('draw.html',{title:"Starts.tf"});
//});

//join room
router.get('/:roomId/:mapname', function(req, res, next) {
  res.render('draw.html',{ROOMID:req.params.roomId,MapName:NaN});
});


module.exports = router;
