function jogar() {
    let sim = document.getElementById('confS')
    let nao = document.getElementById('confN')
    let player = document.getElementById('player')
    let res = document.querySelector('div#res')
    if (sim.checked) {
        let comOption;
        let playOption;
        let playnum = Number(player.value)
        let ale = Math.floor(Math.random() * 3) + 1
       
        /* configuração para modo COM */
        if (ale == 1) {comOption = `Pedra <img src="../imagens/pedra.png" alt="" class="objecto"></img>`}
        if (ale == 2) {comOption = `Papel <img src="../imagens/papel.png" alt="" class="objecto"></img>`}
        if (ale == 3) {comOption = `Tesoura <img src="../imagens/tesouras.png" alt="" class="objecto"></img>`}
        res.innerHTML = `<p>computador jogou ${comOption} </p>`
        
        if(playnum == 1) {playOption = `Pedra <img src="../imagens/pedra.png" alt="" class="objecto"></img>`}
        if(playnum == 2) {playOption = `Papel <img src="../imagens/papel.png" alt="" class="objecto"></img>`}
        if(playnum == 3) {playOption = `Tesoura <img src="../imagens/tesouras.png" alt="" class="objecto"></img>`}
        res.innerHTML += `<p> jogador jogou ${playOption}`

        /*win Draw Lost*/
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

    }
    
}