let sec1Div2 = document.querySelector('#sec1Div2')

window.addEventListener('load',()=>{
  setInterval(()=>{
    let date = new Date()
    let hour = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let amPm= "AM"
    if(hour > 12){
      hour=hour-12;
      amPm="PM"
    }
    sec1Div2.innerHTML=`<div id="sec1Div2-1" class="timeSections">
            <div id="sec1Div2-1-1" class="clockDigitSection"><p>${hour.toString().padStart(2,'0')}</p></div>
            <div id="sec1Div2-1-2" class="clockStringSection"><p>HOURS</p></div>
          </div>
          <div id="sec1Div2-2" class="timeSections">
            <div id="sec1Div2-2-1" class="clockDigitSection"><p>${minutes.toString().padStart(2,'0')}</p></div>
            <div id="sec1Div2-2-2" class="clockStringSection"><p>MINUTES</p></div>
          </div>
          <div id="sec1Div2-3" class="timeSections">
            <div id="sec1Div2-3-1" class="clockDigitSection"><p>${seconds.toString().padStart(2,'0')}</p></div>
            <div id="sec1Div2-3-2" class="clockStringSection"><p>SECONDS</p></div>
          </div>
          <div id="sec1Div2-4">${amPm}</div>`
  },1000)
})
      
