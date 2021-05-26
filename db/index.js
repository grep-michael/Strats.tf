class Client{
    
    constructor() {
        this.db = new Map();
    }
    addRoom(RoomEntity) {
        this.db.set(RoomEntity.id,RoomEntity)
    }
    roomFromDBWhereIDEquals(roomId){
        
        if(this.db.has(roomId)){
            return this.db.get(roomId);
        }

        return "No such room"
    }
}
class Room{

    constructor(id,map) {
        this.id = id;
        this.mapname = map;
    }
    getMapName(){
        return this.mapname;
    }
    getID(){
        return this.id;
    }
}

const client = new Client();

module.exports = {Room,client}