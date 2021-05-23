let CurrentButton = document.getElementById("DrawButton");


function changeButton(buttonName){
    CurrentButton.classList.remove('btn-outline-light');
    let el = document.getElementById(buttonName);
    if(el){
        el.classList.add('btn-outline-light');
        CurrentButton = el;
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
function cleanCanvas(){
    clear();
    drawingGraphics.clear();
    drawStack = [];
}