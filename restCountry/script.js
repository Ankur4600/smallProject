let changemode = document.querySelector('.changemode')
let body = document.querySelector('body')
let mode = document.querySelector(".changemode > span")
changemode.addEventListener('click', () => {
  if (body.classList.contains('light')) {
    body.classList.remove('light')
    body.classList.remove('light')
    body.classList.add('dark')
    mode.innerHTML = "dark Mode"
  } else {
    body.classList.remove('dark')
    body.classList.add('light')
    mode.innerHTML = "Light Mode"
  }
})

let subfilter = document.querySelector(".subfilter")
let filterlist = document.querySelector(".filterlist")
let icon = document.querySelector('.fa-sort-down')
subfilter.addEventListener('click', () => {
  if (filterlist.style.display == "none") {
    filterlist.style.display = "block"
    icon.style.transform = `rotate(0deg)`
  } else {
    filterlist.style.display = "none"
    icon.style.transform = `rotate(90deg)`
  }
})

let container = document.querySelector('.container')
let country = [];
let fetchData = async () => {
  let countryData = await axios.get('https://restcountries.com/v3.1/all')
  country = countryData.data
  // console.log(data);
  country.forEach((value,index) => {
    let div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `<div><img src="${country[index].flags.png}" alt="loading..."></div>
            <h1>India</h1>
            <p>Population: 1410000000</span></p>
            <p>Region: <span>Asia</span></p>
            <p>Capital: Delhi</span></p>`
    container.appendChild(div)
  })
}
fetchData()