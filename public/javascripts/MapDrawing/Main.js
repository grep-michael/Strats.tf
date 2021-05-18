
var ClassIconsMap = new Map();
var Maps = new Map();
var drawStack = []
var mouseOver = false;
var drawingGraphics,canvas,bg;
var mapname = "process" 
//1024 x 768
//TODO resize

function preload(){
    ClassIconsMap.set('soldier',loadImage("images/classes/Soldier_emblem_RED.png"));
    ClassIconsMap.set('demoman',loadImage("images/classes/Demoman_emblem_RED.png"));
    ClassIconsMap.set('medic', loadImage("images/classes/Medic_emblem_RED.png"));
    ClassIconsMap.set('scout',loadImage("images/classes/Scout_emblem_RED.png"));
    Maps.set('mid',loadImage(`images/${mapname}/${mapname}mid.png`));
    Maps.set('last', loadImage(`images/${mapname}/${mapname}last.png`));
    Maps.set('second', loadImage(`images/${mapname}/${mapname}second.png`));
}

function setup(){
    reSizeMaps();
    bg = Maps.get('mid')
    //drawing happens on graphics objects which are rendered over the image
    //cursors are drawn on the main canvas
    var canvasDiv = document.getElementById('canvas');
    //comment out when multiple pictures are added
    var width = canvasDiv.clientWidth;
    //var canvas = createCanvas(width,400)
    canvas = createCanvas(bg.width,bg.height);
    canvas.parent('canvas')
    //drawingGraphics = createGraphics(width,400)
    drawingGraphics = createGraphics(bg.width,bg.height);
    drawingGraphics.clear();
    stickerGraphics = createGraphics(bg.width,bg.height);
    stickerGraphics.clear();
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
    if (e.keyCode == 90 && (e.ctrlKey || e.metaKey)) {
        drawingGraphics.clear()
        try{
            drawingGraphics.image(drawStack.pop(),0,0);
        }catch(e){
            console.log("Stack empty");
        }
    }
}https://medal.tv/clips/52172487/d1337dhTaVbm

function changeToolToErase(){
    CurrentTool=eraseTool;
    changeButton('EraseButton');
}
function changeToolToDraw(){
    CurrentTool=drawTool;
    changeButton('DrawButton');
}
function stickerClick(args){
    CurrentTool = new StickerTool(args);
    changeButton('');
}
function changeMap(point){
    bg = Maps.get(point)
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

function cleanCanvas(){
    clear();
    drawingGraphics.clear();
    drawStack = [];
}