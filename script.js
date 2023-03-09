const search = document.querySelector(".search")
const searchBar = document.querySelector(".search-bar")

search.addEventListener("focus", e => {
    searchBar.style.border = "1px solid white"
})
search.addEventListener("focusout", e => {
    searchBar.style.border = "1px rgba(255, 255, 255, 0.1) solid"
})