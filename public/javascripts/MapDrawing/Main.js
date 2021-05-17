
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
}

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
    for(let [key,value] of Maps){
        Maps[key] = value.resize(990,0);
    }
}

function cleanCanvas(){
    clear();
    drawingGraphics.clear();
    drawStack = [];
}