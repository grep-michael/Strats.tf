var express = require('express');
var router = express.Router();
var {v4:uuidv4} = require('uuid') 
var {client,Room} = require('../db/index.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

router.get('/makeRoom/:mapName', function(req, res, next) {
  //create new room
  //res.statusCode = 302;
  
  let room = new Room(uuidv4(),req.params.mapName);
  client.addRoom(room)

  res.location(`/${room.getID()}`)
  res.status(302).end()

});
router.get('/getRoom/:roomId', function(req, res, next) {
  let id = req.params.roomId
  res.json({room:client.roomFromDBWhereIDEquals(id)});
})
//router.get('/draw', function(req, res, next) {
//  res.render('draw.html',{title:"Starts.tf"});
//});

//join room
router.get('/:roomId', function(req, res, next) {
  res.render('draw.html',{ROOMID:req.params.roomId});
});


module.exports = router;
