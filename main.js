const hambugerMenu = document.querySelector(".hamburger-menu")
const hambugerMenuIcon = document.querySelector(".fa-bars")
const hambugerMenuClose = document.querySelector(".close")


// opening the hamburger menu when clicking on the icon
hambugerMenuIcon.addEventListener('click', function () {
    hambugerMenu.classList.add('active')
})

// close the hamburger menu when clicking on the 'X' icon
hambugerMenuClose.addEventListener('click', function () {
    hambugerMenu.classList.remove('active')
})