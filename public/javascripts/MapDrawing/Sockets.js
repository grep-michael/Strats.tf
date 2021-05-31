const socket = io('/');
socket.binaryType = 'blob'

socket.emit('join-room',ROOM_ID,local_id,customCanvas)

socket.on('update-peer-layers',(pixels,id) =>{
    console.log(layer,id)

    peer_layers.set(id,pixels);
})

socket.on('update-chunk',(chunk,peerId) =>{
    firstChar = chunk.slice(0,1)
    //lastChar = chunk.slice(-1)
    if (firstChar == "{"){
        peerPixels[peerId] = chunk
    }else{
        peerPixels[peerId] += chunk
    }
    

    
})


function test(){
    chunks = 100;
    drawingGraphics.loadPixels()
    pixelsJson = JSON.stringify(drawingGraphics.pixels)
    //let rebuild= "";
    // we have to send in chunks
    chunksSize = pixelsJson.length/chunks;
    curChunk = 0;
    for(i=1;i<=chunks;i++){
        new_chunk = curChunk + chunksSize+1; 
        x = pixelsJson.slice(curChunk,new_chunk);
        //rebuild += x;
        socket.emit('emit-chunk',x,ROOM_ID,local_id);
        curChunk = new_chunk;
    }
    //console.log(rebuild.slice(0,50),rebuild.slice(-50),rebuild.length)
    //console.log(pixelsJson.slice(0,50),pixelsJson.slice(-50),pixelsJson.length)
    //console.log(rebuild == pixelsJson)
}


