const socket = io('/');
socket.binaryType = 'blob'
socket.emit('join-room',ROOM_ID)

socket.on('update-peer-layers',(pixels,id) =>{
    console.log(layer,id)

    peer_layers.set(id,pixels);
})

up = function updateMap(){
    drawingGraphics.loadPixels()
    pixelsJson = JSON.stringify(drawingGraphics.pixels)
    console.log(pixelsJson)
    socket.emit('update-maps', ROOM_ID,local_id, pixelsJson)
}


