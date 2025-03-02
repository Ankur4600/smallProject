const monts = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];
const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];


let sec1MainDiv2P1 = document.querySelector('#sec1MainDiv2P1')
let countDownDiv = document.querySelector('#countDownDiv')
let section1 = document.querySelector('#section1')



const myFun = () => {
  let giveAwayDate = new Date(2025, 5, 15, 23, 59, 0)
  let dateToday = new Date()
  let diff = giveAwayDate - dateToday
  let giveAwayDay = giveAwayDate.getDay()
  let giveAwayDateNum = giveAwayDate.getDate()
  let giveAwayMonth = giveAwayDate.getMonth()
  let giveAwayYear = giveAwayDate.getFullYear()
  let giveAwayHour = giveAwayDate.getHours()
  let giveAwayMinutes = giveAwayDate.getMinutes()

  let amPm = 'AM'

  if (giveAwayHour > 12) {
    giveAwayHour = giveAwayHour - 12
    amPm = "PM"
  }
  sec1MainDiv2P1.innerHTML = `giveaway ends on ${days[giveAwayDay]}, ${giveAwayDateNum} ${monts[giveAwayMonth]} ${giveAwayYear} ${giveAwayHour.toString().padStart(2, '0')}:${giveAwayMinutes.toString().padStart(2, '0')}${amPm}`
  if (diff < 0) {
    section1.innerHTML = `<h1>You Are Too Late!!!!</h1>
    <h1>Giveaway Ended!! Better Luck Next Time</h1>
    `
  } else {
    let countDownDiv = document.querySelector('#countDownDiv')

    let dayCount = Math.floor(diff / (1000 * 60 * 60 * 24))
    document.querySelector('#daySec').innerHTML = dayCount.toString().padStart(2, '0')

    let hourCount = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    document.querySelector('#hourSec').innerHTML = hourCount.toString().padStart(2, '0')

    let minuteCount = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    document.querySelector('#minutesSec').innerHTML = minuteCount.toString().padStart(2, '0')

    let secondCount = Math.floor((diff % (1000 * 60)) / (1000))
    document.querySelector('#secondSec').innerHTML = secondCount.toString().padStart(2, '0')
  }
}
setInterval(myFun, 1000);