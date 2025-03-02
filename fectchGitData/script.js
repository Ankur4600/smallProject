const fetchGitData = async (users) => {
  let response = await fetch(`https://api.github.com/users/${users}`)
  console.log(response);
  let gitData = await response.json();
  console.log(gitData);
  let userDetails = document.querySelector('#section1')
  gitData.id ? userDetails.innerHTML = `<div id="imgDiv">
      <img src="${gitData.avatar_url}" alt="loading" id="avatar">
    </div>
    <div id="div1">
      <h1>Name:<span> ${gitData.name}</span></h1>
      <h3>Bio: <span>${gitData.bio}</span></h3>
      <h3>Location: <span>${gitData.location}</span></h3>
      <div id="wordReportDiv">
        <div class="workDiv" id="repDiv">Repos:${gitData.public_repos}</div>
        <div class="workDiv" id="followersDiv">Followers: ${gitData.followers}</div>
        <div class="workDiv" id="followingDiv">Following:${gitData.following} </div>
      </div>
    </div>`: userDetails.innerHTML = `<h1 style="text-align:center;  color:red;">User Detail Not Found</h1?`;
}
let submitForm = document.querySelector('#gitHubId')
submitForm.addEventListener('submit', (e) => {
  e.preventDefault()
  let userID = document.querySelector('#formInput').value
  fetchGitData(userID);
})




// let submitButton = document.querySelector('#submitButton')
// submitButton.addEventListener('click',(e)=>{
//   e.preventDefault()
//   let userID = document.querySelector('#formInput').value
//   fetchGitData(userID);
// })
