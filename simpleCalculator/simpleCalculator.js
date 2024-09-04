let currentValue='';
function one(){
    currentValue=currentValue+'1';
    document.querySelector('#input').value=currentValue;
}
function two(){
    currentValue=currentValue+'2';
    document.querySelector('#input').value=currentValue;
}
function three(){
    currentValue=currentValue+'3';
    document.querySelector('#input').value=currentValue;
}
function four(){
    currentValue=currentValue+'4';
    document.querySelector('#input').value=currentValue;
}
function five(){
    currentValue=currentValue+'5';
    document.querySelector('#input').value=currentValue;
}
function six(){
    currentValue=currentValue+'6';
    document.querySelector('#input').value=currentValue;
}
function seven(){
    currentValue=currentValue+'7';
    document.querySelector('#input').value=currentValue;
}
function eight(){
    currentValue=currentValue+'8';
    document.querySelector('#input').value=currentValue;
}
function nine(){
    currentValue=currentValue+'9';
    document.querySelector('#input').value=currentValue;
}
function zero(){
    currentValue=currentValue+'0';
    document.querySelector('#input').value=currentValue;
}
function dot(){
    currentValue=currentValue+'.';
    document.querySelector('#input').value=currentValue;
}
function minus(){
    currentValue=currentValue+'-';
    document.querySelector('#input').value=currentValue;
}
function plus(){
    currentValue=currentValue+'+';
    document.querySelector('#input').value=currentValue;
}
function divide(){
    currentValue=currentValue+'/';
    document.querySelector('#input').value=currentValue;
}
function multiply(){
    currentValue=currentValue+'*';
    document.querySelector('#input').value=currentValue;
}
function clear(){
    currentValue='';
    document.querySelector('#input').value=currentValue;
}
function equals(){
    let result=eval(currentValue);
    currentValue=result;
    document.querySelector('#input').value=currentValue;
}