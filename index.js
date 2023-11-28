const tabs = document.querySelectorAll('[data-tab-target]')

const tabContens = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContens.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        target.classList.add('active')
    })
});

window.addEventListener('scroll', function() {
    var scroll = document.querySelector('.topbtn');
    scroll.classList.toggle("active" , window.scrollY > 50)
})