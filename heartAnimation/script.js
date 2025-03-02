// let body = document.querySelector('body')
// body.addEventListener('mousemove', (e)=>{
//   // e.preventDefault()
//   // console.log(e.clientX)
//   const span = document.createElement('span')
//   let size = Math.floor(Math.random()*100)
//   span.style.height = `${size}px`
//   span.style.width = `${size}px`
//   span.style.top = `${e.clientY}px`
//   span.style.left = `${e.clientX}px`
//   body.appendChild(span)
//   setTimeout(()=>{
//     span.remove()
//   },4000)
  
// })

let body = document.querySelector('body')
body.addEventListener('mousemove', (e)=>{
    const span = document.createElement('span')
    let size = Math.floor(Math.random()*100)
    span.style.height = `${size}px`
    span.style.width = `${size}px`
    span.style.top=`${e.clientY}px`
    span.style.left=`${e.clientX}px`
    body.appendChild(span)
    setTimeout(()=>{
        span.remove()
    },4000)
})
