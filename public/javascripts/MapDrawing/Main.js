
var drawingGraphics;
var bg;


function preload(){
    bg = loadImage('images/SnakeWater/Snakewater_overview.png');
}

function setup(){
    var canvasDiv = document.getElementById('canvas');
    var width = canvasDiv.clientWidth;
    var canvas = createCanvas(width,400)
    canvas.parent('canvas')
    drawingGraphics = createGraphics(width,400)
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