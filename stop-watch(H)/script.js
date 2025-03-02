let dateDiv = document.querySelector("#dateDiv")
let myDate = new Date();
let day = String(myDate.getDate()).padStart(2,"0")
let months = String(myDate.getMonth()+1).padStart(2,"0")
let year = String(myDate.getFullYear()).padStart(2,"0")
dateDiv.innerHTML=`${day}/${months}/${year}`

let timerDiv = document.querySelector("#timerDiv")
let startButton = document.querySelector("#startButton")
let stopButton = document.querySelector("#stopButton")
let resetButton = document.querySelector("#resetButton")
// start button
let seconds = 0
let minutes = 0
let hours = 0
timerDiv.innerHTML = `${String(hours).padStart(2,"0")}:${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`
let intervalFer;
startButton.addEventListener('click',()=>{
  startButton.disabled = true
  stopButton.disabled = false
  resetButton.disabled = false
  intervalFer = setInterval(()=>{
    seconds++
    if(seconds == 60){
      seconds=0
      minutes++
    }
    if(minutes == 60){
      minutes = 0
      hours++
    }
    timerDiv.innerHTML = `${String(hours).padStart(2,"0")}:${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`
  },1000)
})

// stop button
stopButton.addEventListener('click',()=>{
  startButton.disabled = false
  stopButton.disabled = true
  resetButton.disabled = false
   clearInterval(intervalFer)
})

// reset button
resetButton.addEventListener('click',()=>{
  startButton.disabled = false
  stopButton.disabled = true
  resetButton.disabled = true
  clearInterval(intervalFer)
  seconds = 0
  minutes = 0
  hours = 0
timerDiv.innerHTML = `${String(hours).padStart(2,"0")}:${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`
})

