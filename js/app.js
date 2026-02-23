/* Variables extraidas usando el DOM */

const nav = document.querySelectorAll('.nav');
const loading_section = document.querySelector('.loading_section')
const hamburguer = document.getElementById('hamburguer')
const cont_hamburguer = document.getElementById('cont_hamburguer')
const hamburguer_items = document.querySelectorAll('.hamburguer_items')
var alex_anim = document.querySelector('.alex_anim')
const bg_lights = document.querySelector('.bg_lights')

/* Añado propiedades al logo */

const loading_container = document.querySelector('.loading_container')
loading_container.style.width = `${window.innerWidth / 2}px`
loading_container.style.height = `${window.innerWidth / 2}px`

const span_logo = document.querySelectorAll('.span_logo')
span_logo.forEach(element => {
    element.style.fontSize = `${window.innerWidth / 6}px`
});



/* Animando mi nombre */

var alexander = 'Dev'
var index = 0
var retroceso = false

setInterval(() => {
    if (retroceso === false) {
        alex_anim.textContent = alexander.slice(0, index);
        index !== alexander.length ? index++ : retroceso = true
    } else {
        alex_anim.textContent = alexander.slice(0, index);
        if (index !== 0) {
            index--
        } else {
            retroceso = false
            alexander === 'Dev' ? alexander = 'Web' : alexander = 'Dev'
        }
    }

}, 200);

/* Animando Hamburguer */
hamburguer_items.forEach(element => {
    element.addEventListener('click', () => {
        hamburguer.style.right = '-100%';
        mostrar_hamburguer = false;
    })
});
var mostrar_hamburguer = false
cont_hamburguer.addEventListener('click', () => {
    if (mostrar_hamburguer === false) {
        hamburguer.style.right = '3%';
        mostrar_hamburguer = true;
    } else {
        hamburguer.style.right = '-100%';
        mostrar_hamburguer = false;
    }

})

/* Evento loader */

window.addEventListener('load', () => {
    loading_section.style.display = 'none';
});

/* Creo luces aleatorias en el fondo */

for (let index = 0; index < 80; index++) {

    let lights = document.createElement('span')
    let lights_with = Math.floor(Math.random() * 30)
    lights.className = 'lights'

    const props_lights = [
        index > 40 ? ['top', `${Math.floor(Math.random() * document.documentElement.scrollHeight)}px`] : ['top', `${Math.floor(Math.random() * window.innerHeight)}px`],
        ['right', `${Math.floor(Math.random() * window.innerWidth)}px`],
        ['width', `${lights_with}px`],
        ['height', `${lights_with}px`],

        ['animation-delay', `${Math.random() * 2}s`],
    ]

    props_lights.forEach(([prop, value]) => {
        lights.style[prop] = value

    })
    bg_lights.appendChild(lights)
}

const cont_view = document.querySelectorAll('.cont_view')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('view')
            observer.unobserve(entry.target)
        }
    })
}, {
    threshold: 0.2
})

cont_view.forEach(element => {
    observer.observe(element)
});
