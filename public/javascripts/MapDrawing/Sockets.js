const socket = io('/');


socket.emit('join-room',ROOM_ID)

socket.emit('get-map-name',ROOM_ID)

socket.on('give-map-name',answer =>{
    if(mapname != "Nan"){
        socket.emit('set-map-name',(ROOM_ID,mapname))
    }
})
function getMapName(){

}

