
var ClassIconsMap = {};
var drawStack = []

var drawingGraphics;
var bg;
var mapname = "gullywash"

function preload(){
    bg = loadImage(`images/${mapname}/${mapname}mid.png`);
    ClassIconsMap['soldier'] = loadImage("images/classes/Soldier_emblem_RED.png")
    ClassIconsMap['demoman'] = loadImage("images/classes/Demoman_emblem_RED.png")
    ClassIconsMap['medic'] = loadImage("images/classes/Medic_emblem_RED.png")
    ClassIconsMap['scout'] = loadImage("images/classes/Scout_emblem_RED.png")
}

function setup(){
    //drawing happens on graphics objects which are rendered over the image
    //cursors are drawn on the main canvas
    var canvasDiv = document.getElementById('canvas');
    //comment out when multiple pictures are added
    var width = canvasDiv.clientWidth;
    //var canvas = createCanvas(width,400)
    var canvas = createCanvas(bg.width,bg.height);
    
    canvas.parent('canvas')
    //drawingGraphics = createGraphics(width,400)
    drawingGraphics = createGraphics(bg.width,bg.height);
    drawingGraphics.clear();
    stickerGraphics = createGraphics(bg.width,bg.height);
    stickerGraphics.clear();
}

function draw(){
    background(bg)
    
    if(mouseIsPressed){
        CurrentTool.action(drawingGraphics);
    }
    image(drawingGraphics,0,0);
    CurrentTool.cursor();

}
function mousePressed() {
    drawStack.push(drawingGraphics.get())
  }
function keyPressed(e) {
    if (e.keyCode == 90 && (e.ctrlKey || e.metaKey)) {
        drawingGraphics.clear()
        drawingGraphics.image(drawStack.pop(),0,0); 
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

function changeMap(point){
    bg = loadImage(`images/${mapname}/${mapname}${point}.png`);
}

function stickerClick(args){
    CurrentTool = new StickerTool(args);
    changeButton('');
}

function cleanCanvas(){
    clear();
    drawingGraphics.clear();
    stickerGraphics.clear();
    stickers = [];
    drawStack = [];
}