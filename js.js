const icon = document.querySelector('.icon');
const searchBar = document.querySelector('.searchBar');

icon.onclick = function() {
    searchBar.classList.toggle('active')
}