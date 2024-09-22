

const btn = document.getElementById('burgerBtn')
const list = document.getElementById('list')

btn.addEventListener('click', function() {
    list.classList.toggle('active')
})
