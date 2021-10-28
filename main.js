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