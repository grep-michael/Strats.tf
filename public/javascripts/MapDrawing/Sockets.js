var lookingForMap = false;
const socket = io('/');


socket.emit('join-room',ROOM_ID)

socket.emit('get-map-name',ROOM_ID)

socket.on('give-map-name',()=>{
    socket.emit('give-server-map-name',mapname)
})

function getMapName(){
    lookingForMap = true;
    socket.emit('get-map-name',ROOM_ID);
    socket.on('recive-map-name',name =>{
        console.log(name)
    })
}

