document.addEventListener('DOMContentLoaded', function () {
    let form = document.querySelector('form')
    let errorContainer = document.querySelector('.message-error')
    let errorList = document.querySelector('.message-error ul')
    let successContainer = document.querySelector('.message-success')
    const darkModeToggle = document.querySelector('.dark-mode-toggle')
    const body = document.body

    let isDarkMode = false

    darkModeToggle.addEventListener('click', function () {
        isDarkMode = !isDarkMode

        if (isDarkMode) {
            body.classList.add('dark')
        } else {
            body.classList.remove('dark')
        }
    })

    const swiper = new Swiper('.mon-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    })

})
const tabs = document.querySelectorAll('.tab')
const contents = document.querySelectorAll('.content')

tabs.forEach(tab => {
    tab.addEventListener('click', function () {
        tabs.forEach(t => t.classList.remove('tab-active'))
        contents.forEach(c => c.classList.remove('active'))

        this.classList.add('tab-active')
        const contentClass = this.classList[1].replace('tab-', '')
        document.querySelector(`.content.${contentClass}`).classList.add('active')
    })
})


const darkModeToggle = document.querySelector('.dark-mode-toggle')
const body = document.body
let isDarkMode = false

darkModeToggle.addEventListener('click', function () {
    isDarkMode = !isDarkMode
    body.classList.toggle('dark', isDarkMode)
})

console.log('Script chargé avec succès')
document.addEventListener('DOMContentLoaded', function () {

    const burgerMenu = document.querySelector('.burger-menu')
    const navLinks = document.querySelector('.nav-links')
  
    burgerMenu.addEventListener('click', function () {
      navLinks.classList.toggle('show')
    })
  })