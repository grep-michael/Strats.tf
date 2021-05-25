class Client{
    
    constructor() {
        this.db = [];
    }
    addRoom(RoomEntity) {
        this.db.push(RoomEntity)
    }
    roomFromDBWhereIDEquals(roomId){
        returnValue = "No such Room"
        /* for some ungoldy reason javascript eats shit and dies whenever i try to return from inside a for loop???
        for(var i = 0; i < l; i++){
            if(this.db[i].getID() == roomId){
                return r;
            }
        }*/
        this.db.forEach(element => {
            console.log(element)
            if(element.getID == roomId){
                returnValue = element;
            }
        });

        return returnValue
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

module.exports = {Room,Client}