const socket = io('/');

socket.emit('join-room',ROOM_ID)

socket.on('update-peer-layers',(layer,id) =>{
    console.log(layer,id)
    peer_layers.set(id,layer);
})

function updateMap(){
    socket.emit('update-maps',drawingGraphics,ROOM_ID,local_id)
}


