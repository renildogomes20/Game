//function jogar() {
    const sim = document.getElementById('confS')
    const nao = document.getElementById('confN')
    const player = document.getElementById('player')
    const res = document.querySelector('div#res')
    const pedra=document.querySelector("#pedra")
    const res1 = document.querySelector("#status")
     
    clicouPedra=(valor)=> {
        let playOption = valor
        let ale = Math.floor(Math.random() * 3) + 1
        if(ale==1) {
            res.innerHTML="EMPATE"
            if (ale == 1) {comOption = `Pedra <img src="./imagens/pedra.png" alt="" class="objecto"></img>`}
            if(playOption == 1) {playOption = `Pedra <img src="../imagens/pedra.png" alt="" class="objecto"></img>`}

        }else if(ale==2) {
            res.innerHTML="Computador Ganhou!"
            if(playOption == 1) {playOption = `Pedra <img src="../imagens/pedra.png" alt="" class="objecto"></img>`}
            if (ale == 2) {comOption = `Papel <img src="../imagens/papel.png" alt="" class="objecto"></img>`}

        }else if(ale==3){
            if(playOption == 1) {playOption = `Pedra <img src="../imagens/pedra.png" alt="" class="objecto"></img>`}
            if (ale == 3) {comOption = `Tesoura <img src="../imagens/tesouras.png" alt="" class="objecto"></img>`}
            res.innerHTML="Jogador Ganhou!"
        }
        res1.innerHTML = `<p>computador jogou ${comOption} </p>`
        res1.innerHTML += `<p> jogador jogou ${playOption}</p>`
    }

    clicouPapel=(valor)=> {
        let playOption = valor
        let ale = Math.floor(Math.random() * 3) + 1
        if(ale==1) {
            if(playOption == 2) {playOption = `Papel <img src="../imagens/papel.png" alt="" class="objecto"></img>`}
            if (ale == 1) {comOption = `Pedra <img src="../imagens/pedra.png" alt="" class="objecto"></img>`}
            res.innerHTML="Jogador Ganhou!"
        }else if(ale==2) {
            if(playOption == 2) {playOption = `Papel <img src="../imagens/papel.png" alt="" class="objecto"></img>`}
            if (ale == 2) {comOption = `Papel <img src="../imagens/papel.png" alt="" class="objecto"></img>`}
            res.innerHTML="EMPATE"
        }else if(ale==3) {
            if(playOption == 2) {playOption = `Papel <img src="../imagens/papel.png" alt="" class="objecto"></img>`}
            if (ale == 3) {comOption = `Tesoura <img src="../imagens/tesouras.png" alt="" class="objecto"></img>`}
            res.innerHTML="Computador Ganhou!"
        }
        res1.innerHTML = `<p>computador jogou ${comOption} </p>`
        res1.innerHTML += `<p> jogador jogou ${playOption}</p>`
    }

    clicouTesoura=(valor)=> {
        let playOption=valor
        let ale = Math.floor(Math.random() * 3) + 1
        if(ale==1) {
            if(playOption == 3) {playOption = `Tesoura <img src="../imagens/tesouras.png" alt="" class="objecto"></img>`}
            if (ale == 1) {comOption = `Pedra <img src="../imagens/pedra.png" alt="" class="objecto"></img>`}
            res.innerHTML="Computador Ganhou!"
        }else if(ale==2) {
            if(playOption == 3) {playOption = `Tesoura <img src="../imagens/tesouras.png" alt="" class="objecto"></img>`}
            if (ale == 2) {comOption = `Papel <img src="../imagens/papel.png" alt="" class="objecto"></img>`}
            res.innerHTML="Jogador Ganhou!"
        }else if(ale==3) {
            if(playOption == 3) {playOption = `Tesoura <img src="../imagens/tesouras.png" alt="" class="objecto"></img>`}
            if (ale == 3) {comOption = `Tesoura <img src="../imagens/tesouras.png" alt="" class="objecto"></img>`}
            res.innerHTML="EMPATE"
        }
        res1.innerHTML = `<p>computador jogou ${comOption} </p>`
        res1.innerHTML += `<p> jogador jogou ${playOption}</p>`
    }
    /*if (sim.checked) {
        let comOption;
        let playOption;
        let playnum = Number(player.value)
        
       
        /* configuração para modo COM 
        if (ale == 1) {comOption = `Pedra <img src="../imagens/pedra.png" alt="" class="objecto"></img>`}
        if (ale == 2) {comOption = `Papel <img src="../imagens/papel.png" alt="" class="objecto"></img>`}
        if (ale == 3) {comOption = `Tesoura <img src="../imagens/tesouras.png" alt="" class="objecto"></img>`}
        res.innerHTML = `<p>computador jogou ${comOption} </p>`
        
        if(playnum == 1) {playOption = `Pedra <img src="../imagens/pedra.png" alt="" class="objecto"></img>`}
        if(playnum == 2) {playOption = `Papel <img src="../imagens/papel.png" alt="" class="objecto"></img>`}
        if(playnum == 3) {playOption = `Tesoura <img src="../imagens/tesouras.png" alt="" class="objecto"></img>`}
        res.innerHTML += `<p> jogador jogou ${playOption}`

        /*win Draw Lost*
        if (ale == 1) {
            if (playnum == 1) {
                res.innerHTML += `<p><strong>EMPATE!</strong></p>`
            }
            if (playnum == 2) {
                res.innerHTML += `<p> Jogador <strong>Ganhou!</strong></p>`
            }
            if (playnum == 3) {
                res.innerHTML += `<p> COMPUTADOR <strong>Ganhou!</strong></p>`
            }
        }else if (ale==2) {
            if (playnum == 1) {
                res.innerHTML += `<p>COMPUTADOR <strong>Ganhou!</strong></p>`
            }
            if (playnum == 2) {
                res.innerHTML += `<p><strong>EMPATE</strong></p>`
            }
            if (playnum == 3) {
                res.innerHTML += `<p>Jogador <strong>Ganhou!</strong></p>`
            }
        }else if (ale==3) {
            if (playnum == 1) {
                res.innerHTML += `<p>Jogador <strong>Ganhou!</strong></p>`
            }
            if (playnum == 2) {
                res.innerHTML += `<p> COMPUTADOR <strong>Ganhou!</strong></p>`
            }
            if (playnum ==3) {
                res.innerHTML += `<p> EMPATE!</p>`
            }
        } 

    }
    if (nao.checked) {
        res.innerHTML = 'Game Over!'
        window.document.body.h1.style.display ='none'

    }*/
    
//}