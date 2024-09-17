const form = document.querySelector('form')

//to remove other text
const p1 = document.querySelectorAll('.p1')
function removeText(){
  p1.forEach(function(para){
    para.innerHTML = ""
  })
}


form.addEventListener('submit', function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector('#results');
  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `please enter a valid height ${height}`
  }else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `please enter a valid weight ${weight}`
  }else{
    bmi = ((weight/(height * height))*10000).toFixed(4)
    results.innerHTML = `ratio: ${bmi}`
    const guide = document.querySelector('#guide')
    if(bmi < 18.6){
      guide.innerHTML =  "Your are under weight"
      removeText()
    }else if(bmi >= 18.6 && bmi < 24.9){
      guide.innerHTML = "Your weight is Noraml"
      removeText()
    }else{
      guide.innerHTML = "You are over weight "
      removeText()
    }
  }
 
})