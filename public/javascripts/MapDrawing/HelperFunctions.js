//create a method for determining if a sticker is object is in and array of stickers
//this method will break if not used with stickers
//this is no longer used but kept incase
Array.prototype.contains = function(obj){
    var distant = 10;
    var i, l = this.length;
        for (i = 0; i < l; i++)
        {   
            
            if (this[i].name == obj.name && his[i].x - obj.x > distant && this[i].y - obj.y > distant) return true;
        }
        return false;
}
