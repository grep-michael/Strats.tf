let CurrentButton = document.getElementById("DrawButton");


function changeButton(buttonName){
    CurrentButton.classList.remove('btn-outline-light');
    let el = document.getElementById(buttonName);
    el.classList.add('btn-outline-light');
    CurrentButton = el;
}