const searchData = async (keyWord) => {
  let response = await fetch(`https://api.unsplash.com/search/photos?page=1&per_page=20&query=${keyWord}&client_id=46JS76hhM6iAw2T58EgR7kvNj4ZVOTqsnACavMN4Vk4`)
  let data = await response.json();
  let images = data.results
  let searchResult = document.querySelector('.search-results')
  searchResult.innerHTML =""
  console.log(images);
  
  images.forEach((elements, i) => {
    let element = document.createElement('div')
    element.classList.add('search-result')
    element.innerHTML = `<img
          src=${elements.urls.small}
          alt="image"
        />
        <a
          href="https://unsplash.com/photos/g-7X6T7vAI4"
          target="_blank"
          rel="noopener noreferrer"
          >${elements.alt_description}</a
        >
        <a
          href=${elements.links.download}
          target="_blank"
          download ="${keyWord}.png"
          rel="noopener noreferrer"
          >Download</a
        >`;
    searchResult.appendChild(element)

  })
  
}

let searchForm = document.querySelector("#searchForm")
searchForm.addEventListener('submit', (e) => {
  e.preventDefault()
  let searchInput = document.querySelector("#search-input").value

  searchData(searchInput)
})