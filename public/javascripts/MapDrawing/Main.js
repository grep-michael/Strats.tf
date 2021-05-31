
var ClassIconsMap = new Map();
var Maps = new Map();
var drawStack = []
var mouseOver = false;
var drawingGraphics,canvas,bg;
var mapname;
var peer_layers = new Map();
var local_id = uuidv4();
//var mapname = "process" 
//1024 x 768
//TODO resize


window.addEventListener("load", function(){
    setTimeout(test,5000);
});


function cb(data){
    mp = data['room']['mapname']
    Maps.set('mid',loadImage(`/images/${mp}/${mp}mid.png`));
    Maps.set('last', loadImage(`/images/${mp}/${mp}last.png`));
    Maps.set('second', loadImage(`/images/${mp}/${mp}second.png`));
}

function preload(){
    loadJSON(window.location.origin + "/getRoom/" + ROOM_ID,cb)
    ClassIconsMap.set('soldier',loadImage("/images/classes/Soldier_emblem_RED.png"));
    ClassIconsMap.set('demoman',loadImage("/images/classes/Demoman_emblem_RED.png"));
    ClassIconsMap.set('medic', loadImage("/images/classes/Medic_emblem_RED.png"));
    ClassIconsMap.set('scout',loadImage("/images/classes/Scout_emblem_RED.png"));
}

function setup(){
    reSizeMaps();
    bg = Maps.get('mid')
    //drawing happens on graphics objects which are rendered over the image
    //cursors are drawn on the main canvas
    //var canvasDiv = document.getElementById('canvas');
    
    canvas = createCanvas(bg.width,bg.height);
    canvas.parent('canvas')
    
    drawingGraphics = createGraphics(bg.width,bg.height);
    drawingGraphics.clear();
}


function draw(){
    background(bg);
    if(mouseIsPressed){
        if(CurrentTool.type === 'pressed'){
            CurrentTool.action(drawingGraphics);
        }
    }
    image(drawingGraphics,0,0);
    CurrentTool.cursor();
    peer_layers.forEach((layer)=>{
        //layers are pixel arrays as strings
        /** 
         * cant decide how I want to make images from pixels
         * mabye a map for pixels and a map for their images
         * I dont know if i wanna convert pixels into images every time we draw
        */
        pixels = JSON.parse(layer)
    })
}

function mousePressed() {
    if(CurrentTool.type === "click"){
        CurrentTool.action(drawingGraphics);
    }

    if ((mouseY > canvas.position().y),(mouseY < canvas.position().y+canvas.height) && (mouseX > canvas.position().x),(mouseX < canvas.position().x+canvas.width)){
        drawStack.push(drawingGraphics.get());
    }
}

function keyPressed(e) {
    //crt-z
    if (e.keyCode == 90 && (e.ctrlKey || e.metaKey)) {
        drawingGraphics.clear()
        try{
            drawingGraphics.image(drawStack.pop(),0,0);
        }catch(e){
        }
    }else if (e.keyCode == 221 || e.keyCode == 61){
        console.log('+')
        eraseTool.eraserSize += 5;
    }else if(e.keyCode == 219 || e.keyCode == 173){
        console.log('-')
        eraseTool.eraserSize -= 5;
    }

}

function reSizeMaps(){
    function resizeWidth(){
        let inital = 1920;
        let stickerSize = document.getElementById('demoSticker').offsetWidth + (document.getElementById('demoSticker').offsetWidth/2);
        let resizeLength = inital - (inital - window.innerWidth) //1920x1080 is inital size of map 
        resizeLength = resizeLength - stickerSize;
        return resizeLength;
    }
    function resizeHeight(){
        let inital = 1080;
        let stickerSize = document.getElementById('NavBar').offsetHeight + (document.getElementById('NavBar').offsetHeight/2);
        let resizeLength = inital - (inital - window.innerHeight) //1920x1080 is inital size of map 
        resizeLength = resizeLength - stickerSize;
        return resizeLength;
    }
    let newheight = resizeHeight();
    let newwidth = resizeWidth();
    
    for(let [key,value] of Maps){
        var newimg = value
        newimg.resize(newwidth,0);
        if(newimg.height > window.innerHeight){
            value.resize(0,newheight);
        }else{
            value.resize(newwidth,0);
        }
        Maps[key] = value;
    }
}

