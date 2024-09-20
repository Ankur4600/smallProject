
const randomColor = function(){
    const hexVal = '0123456789ABCDEF'
    let color ='#'
    for(let i = 0; i < 6; i++){
    color +=hexVal[Math.floor(Math.random()*16)]
    }
    return color
  }
  let intervalId;
  const startChangingColor = function(){
    if(!intervalId){
      intervalId = setInterval(changeBackgroundColor,1000)
    }
    
     function changeBackgroundColor(){
      const change =document.body.style.backgroundColor = randomColor()
    }
    
    
    
  };
  const stopChangingcolor = function (){
    clearInterval(intervalId);
    intervalId = null;
  };
  
  document.querySelector('#start').addEventListener('click',startChangingColor)
  document.querySelector('#stop').addEventListener('click',stopChangingcolor)
  