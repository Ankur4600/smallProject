
let div2 = document.querySelector('#div2')
let myForm = document.querySelector('#myForm')
myForm.addEventListener('submit',(e)=>{
  e.preventDefault()
  let value = document.querySelector("#inputArea").value
  console.log(value);
  let dynamicDiv = document.createElement('div')
  dynamicDiv.classList.add('dynamicDiv')
  console.log(dynamicDiv);
  dynamicDiv.innerHTML = `
  <div class="SubDynamicDiv">
          <input type="checkbox" id="checkBox1" class="checkBox1"> <label for="checkBox1">${value}</label>
        </div>
        <i class="fa-solid fa-xmark" id="cancelBtn"></i>`
  
  div2.appendChild(dynamicDiv)
})

let cancelBtn = document.querySelector('#cancelBtn')

console.log(cancelBtn);

// cancelBtn.addEventListener('click',(e)=>{
//   console.log(e);
  
//   let dynamicDiv = document.querySelector('.dynamicDiv')
//   dynamicDiv.remove()
// })
