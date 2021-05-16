
var drawingGraphics, stickerGraphics;
var bg;
var mapname = "gullywash"
var stickers = []

function preload(){
    bg = loadImage(`images/${mapname}/${mapname}mid.png`);
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
    
    stickers.forEach((sticker,i)=>{
        stickerGraphics.image(sticker.image,sticker.x,sticker.y,50,50)
    });

    CurrentTool.cursor();
    
    if(mouseIsPressed){
        CurrentTool.action(drawingGraphics);   
    }
    image(stickerGraphics,0,0);
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
    bg = loadImage(`images/${mapname}/${mapname}second.png`);
}
function changetoLast(){
    bg = loadImage(`images/${mapname}/${mapname}last.png`);
}
function changetoMid(){
    bg = loadImage(`images/${mapname}/${mapname}mid.png`);
}

function cleanCanvas(){
    clear();
    drawingGraphics.clear();
    stickerGraphics.clear();
    stickers = []
}