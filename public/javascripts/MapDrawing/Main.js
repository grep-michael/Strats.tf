
var drawingGraphics;
var bg;


function preload(){
    bg = loadImage('images/gullywash/gullymid.png');
}

function setup(){
    var canvasDiv = document.getElementById('canvas');
    //comment out when multiple pictures are added
    var width = canvasDiv.clientWidth;
    //var canvas = createCanvas(width,400)
    var canvas = createCanvas(bg.width,bg.height);
    
    canvas.parent('canvas')
    //drawingGraphics = createGraphics(width,400)
    drawingGraphics = createGraphics(bg.width,bg.height);
    drawingGraphics.clear()
}

function draw(){
    background(bg)
    CurrentTool.cursor()
    if(mouseIsPressed){
        CurrentTool.action(drawingGraphics)    
    }
    image(drawingGraphics,0,0);
}

function changeToolToErase(){
    CurrentTool=eraseTool;
    changeButton('EraseButton')
}
function changeToolToDraw(){
    CurrentTool=drawTool;
    changeButton('DrawButton')
}
function changetoSecond(){
}
function changetoLast(){
}
function changetoMid(){
}

function cleanCanvas(){
    clear();
    drawingGraphics.clear()
}