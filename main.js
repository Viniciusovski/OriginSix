/*
Objeto com atributos e função javascript
({
    name: 'carro',
    cor: 'vermelho',
    correr: function(){ }    
})


const pessoa = {
    name: 'mayk',
    age: 37,
    falar: function(){
        alert(pessoa.name)
    }
}

pessoa.falar()
*/

/* abre e fecha o menu quando clicar no icone */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle){
    element.addEventListener('click', function(){
        nav.classList.toggle('show')
    })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for(const link of links){
    link.addEventListener('click', function(){
        nav.classList.remove('show')
    })
}

/* Mudar o Header da pagina quando der scroll*/
const header = document.querySelector("#header")
const navHeight = header.offsetHeight

window.addEventListener('scroll', function(){
    if(window.scrollY >= navHeight){
        // scroll é maior que a altura do header
        header.classList.add('scroll')
    }else{
        // menor que a altura do header
        header.classList.remove('scroll')
    }
})

/* Testimoniasl carossel slider swiper*/
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true
  })