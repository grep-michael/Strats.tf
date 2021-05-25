var express = require('express');
var router = express.Router();
var {v4:uuidv4} = require('uuid') 


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});
router.get('/makeRoom/:mapName', function(req, res, next) {
  //create new room
  //res.statusCode = 302;
  res.setHeader('map',req.params.mapName);
  res.location(`/${uuidv4()}`)
  //res.set({
  //  'map':req.params.mapName
  //})
  
  console.log(res)
  res.status(400).end()
  //res.redirect(`/${uuidv4()}`);
  
  
  
});

//router.get('/draw', function(req, res, next) {
//  res.render('draw.html',{title:"Starts.tf"});
//});

//join room
router.get('/:roomId', function(req, res, next) {
  console.log(req.headers)
  res.render('draw.html',{ROOMID:req.params.roomId,MapName:NaN});
});


module.exports = router;
