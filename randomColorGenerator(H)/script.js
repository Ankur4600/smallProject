let colorDisplayingDiv = document.querySelector('#colorDisplayingDiv')
let colorGeneratingButton = document.querySelector('#colorGeneratingButton')
let colorNAme = document.querySelector('#colorNAme')


// rgb color code generator
// let generatedColor =()=>{
//   let red = Math.floor(Math.random()*256)
//   let green = Math.floor(Math.random()*256)
//   let blue = Math.floor(Math.random()*256)
//   colorDisplayingDiv.style.backgroundColor = `rgb(${red}, ${green},${blue})`
//   colorNAme.innerHTML =`rgb(${red}, ${green},${blue})`
//   // colorDisplayingDiv.style.boxShadow = `10px 10px 20px rgb(${red}, ${green},${blue})`
// }
// colorGeneratingButton.addEventListener('click' ,generatedColor )
// window.addEventListener('load', generatedColor)




// method 2

let myStr = "0123456789ABCDEF";
let colGenerate = ()=>{
  let color = ""
  for(let i=0; i<6; i++){
    let myIndex = Math.floor(Math.random()*(myStr.length+1));
    let myChar = myStr.charAt(myIndex);
    color=color+myChar;
  }
  colorDisplayingDiv.style.backgroundColor = `#${color}`
  colorNAme.innerText=`#${color}`
}
colorGeneratingButton.addEventListener('click' ,colGenerate )
window.addEventListener("load",colGenerate)
