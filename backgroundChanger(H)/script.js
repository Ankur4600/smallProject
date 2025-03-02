let section1 = document.querySelector('#section1')
let myBtns = document.querySelectorAll('.colorDiv')

const backgroundChhanger = (color) => {
  section1.style.backgroundColor = color;
}

// first Way

myBtns.forEach((button)=>{
  button.addEventListener('click',(e)=>{
    backgroundChhanger(e.target.innerText)
  })
})











// third method

// let redColor = document.querySelector('#redColor')
// let yellowColor = document.querySelector('#yellowColor')
// let greenColor = document.querySelector('#greenColor')
// let orangeColor = document.querySelector('#orangeColor')
// let purpleColor = document.querySelector('#purpleColor')
// let pinkColor = document.querySelector('#pinkColor')
// let tealColor = document.querySelector('#tealColor')
// let blueColor = document.querySelector('#blueColor')
// let goldColor = document.querySelector('#goldColor')
// let crimsonColor = document.querySelector('#crimsonColor')

// redColor
// redColor.addEventListener('click' ,backgroundChhanger('red'))

// // yellowColor
// yellowColor.addEventListener('click' ,backgroundChhanger('yellow'))

// // greenColor
// greenColor.addEventListener('click' ,backgroundChhanger('green'))

// // orangeColor
// orangeColor.addEventListener('click' ,backgroundChhanger('orange'))

// // purpleColor
// purpleColor.addEventListener('click' ,backgroundChhanger('purple'))

// // pinkColor
// pinkColor.addEventListener('click' ,backgroundChhanger('pink'))

// // tealColor
// tealColor.addEventListener('click' ,backgroundChhanger('teal'))