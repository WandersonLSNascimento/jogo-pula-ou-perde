let personagem = document.querySelector('#personagem')
let quadrado = document.querySelector('#quadrado')

function pular(){
    if(personagem.classList != 'animar'){
        personagem.classList.add('animar')
    }

    setTimeout(function(){
        personagem.classList.remove('animar')
    },500)
}

var testarColisao = setInterval(function(){
    
    var topPersonagem = parseInt(
        window.getComputedStyle(personagem).getPropertyValue('top')
    )
    var EsquerdaQuadrado = parseInt(
            window.getComputedStyle(quadrado).getPropertyValue('left')
    )

    if(EsquerdaQuadrado < 28 && EsquerdaQuadrado > 0 && topPersonagem >= 130){
        quadrado.style.animation = 'none'
        quadrado.style.display = 'none'
        alert('você perdeu, aperte F5 para recomeçar!')
    }
},10)