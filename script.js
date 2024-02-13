const searchForm = document.getElementById("form-1")
const searchInput = document.getElementById("search-input")
const searchRes = document.getElementById("search_result")
const showMoreBtn = document.getElementById("showMoreBtn")

const accesskey = "o2fdcfLDXkAJuwioxdkGYWwaiKabsEgp5aYQCzGUjRo";

let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchInput.value ;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();

    if(page === 1){
        searchRes.innerHTML = "";
    }

    const results = data.results;
    results.map((result) =>{
        const img = document.createElement('img');
        img.src= result.urls.small;
        const imgLink = document.createElement("a")
        imgLink.href = result.links.html;
        imgLink.target = "_blank";

        imgLink.appendChild(img)
        searchRes.appendChild(imgLink)
    })

    showMoreBtn.style.display="block";
    yohu.style.display="block";

}

searchForm.addEventListener( 'submit', (e) => {
    e.preventDefault();
    page =1;
    searchImages();
})

showMoreBtn.addEventListener('click', ()=>{
    page++ ;
    searchImages();
});

// https://api.unsplash.com/photos/random/?access_key=o2fdcfLDXkAJuwioxdkGYWwai