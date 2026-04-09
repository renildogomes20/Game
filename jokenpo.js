//function jogar() {
    const player = document.getElementById('player')
    const res = document.querySelector('div#res')
    const pedra=document.querySelector("#pedra")
    const papel=document.querySelector("#papel")
    const tesoura=document.querySelector("#tesoura")
    const res1 = document.querySelector("#resul")
    const nome=document.querySelector("#iname")
    const num=document.getElementById("inum")
    const screen=document.querySelector("#interface")
    const story=document.querySelector("#story")
    const screen2=document.querySelector("#status")

    let cont = Number(num.value)
    let c = 0
    let totalPlayerWins=0
    let totalComputerWins=0
    let totalDraw=0

    reaction=(condicao)=> {
        if(condicao) {
            return "&#x1F60E;"
        }else {
            return "&#x1F61D;"
        }/*else if(condicao){
            return "&#x1F91D;"
        }*/

        /*}else {
            return "&#x1F91D"
        }*/
    }

    clicouStatus=()=>{
        screen.style.display='none'
        screen2.style.display='inline-block'
        story.innerHTML=`<p>You tried ${c} times</p>`
        story.innerHTML+=`<p>${nome.value} won ${totalPlayerWins} ${reaction(totalPlayerWins> totalComputerWins)}</p>`

        story.innerHTML+=`<p>Computer won ${totalComputerWins} ${reaction(totalPlayerWins< totalComputerWins)}</p>`
        story.innerHTML+=`There was ${totalDraw} Draw(s) &#x2696;`
    }
    

    verificarNome=()=> {
        if(nome.value==="") {
            alert("Please type your name!")
            pedra.style.display='none'
            papel.style.display='none'
            tesoura.style.display='none'
            screen.style.display='none'
            screen2.style.display='none'
            
        }else {
            cont = Number(num.value)
            c = 0
            totalPlayerWins=0
            totalComputerWins=0
            totalDraw=0
            screen.style.display='inline-block'
            screen2.style.display='none'
            pedra.style.display='inline-block'
            papel.style.display='inline-block'
            tesoura.style.display='inline-block'
            pedra.disabled=false;
            papel.disabled=false;
            tesoura.disabled=false;
            res1.innerHTML=""
            res.innerHTML=""
            story.innerHTML=""

        }
    }
    

    clicouPedra=(valor)=> {
        let playOption = valor
        let ale = Math.floor(Math.random() * 3) + 1
        if(ale==1) {
            res.innerHTML="DRAW"
            totalDraw+=1
            if (ale == 1) {comOption = `stone <img src="imagens/pedra.png" alt="" class="objecto"></img>`}
            if(playOption == 1) {playOption = `stone <img src="imagens/pedra.png" alt="" class="objecto"></img>`}

        }else if(ale==2) {
            res.innerHTML="Computer won!"
            totalComputerWins+=1
            if(playOption == 1) {playOption = `stone <img src="imagens/pedra.png" alt="" class="objecto"></img>`}
            if (ale == 2) {comOption = `paper <img src="imagens/papel.png" alt="" class="objecto"></img>`}

        }else if(ale==3){
            if(playOption == 1) {playOption = `stone <img src="imagens/pedra.png" alt="" class="objecto"></img>`}
            if (ale == 3) {comOption = `scissors <img src="imagens/tesouras.png" alt="" class="objecto"></img>`}
            res.innerHTML=`${nome.value} Won!`
            totalPlayerWins+=1
        }
        res1.innerHTML = `<p>Computer played ${comOption} </p>`
        res1.innerHTML += `<p> ${nome.value} played ${playOption}</p>`
        c+=1;
        if (c>=cont) {
            pedra.disabled=true;
            papel.disabled=true;
            tesoura.disabled=true;
            res.innerHTML=`<p>You played ${c} times</p>`
            res.innerHTML+="Game OVER!"

            clicouStatus()
            return
        }else {
            res.innerHTML+=`<p>You played ${c} times</p>`
        }
    }

    clicouPapel=(valor)=> {
        let playOption = valor
        let ale = Math.floor(Math.random() * 3) + 1
        if(ale==1) {
            if(playOption == 2) {playOption = `paper <img src="imagens/papel.png" alt="" class="objecto"></img>`}
            if (ale == 1) {comOption = `stone <img src="imagens/pedra.png" alt="" class="objecto"></img>`}
            res.innerHTML=`${nome.value} Won!`
            totalPlayerWins+=1
        }else if(ale==2) {
            if(playOption == 2) {playOption = `paper <img src="imagens/papel.png" alt="" class="objecto"></img>`}
            if (ale == 2) {comOption = `paper <img src="imagens/papel.png" alt="" class="objecto"></img>`}
            res.innerHTML="DRAW"
            totalDraw+=1
        }else if(ale==3) {
            if(playOption == 2) {playOption = `paper <img src="imagens/papel.png" alt="" class="objecto"></img>`}
            if (ale == 3) {comOption = `scissors <img src="imagens/tesouras.png" alt="" class="objecto"></img>`}
            res.innerHTML="Computer Won!"
            totalComputerWins+=1
        }
        res1.innerHTML = `<p>Computer played ${comOption} </p>`
        res1.innerHTML += `<p> ${nome.value} played ${playOption}</p>`
        c+=1
        
        if (c>=cont) {

            pedra.disabled=true;
            papel.disabled=true;
            tesoura.disabled=true;
            res.innerHTML=`<p>You played ${c} times</p>`
            res.innerHTML+="Game OVER!"
            clicouStatus()
            return
        }else {
            res.innerHTML+=`<p>You played ${c} times</p>`
        }
    }

    clicouTesoura=(valor)=> {
        let playOption=valor
        let ale = Math.floor(Math.random() * 3) + 1
        if(ale==1) {
            if(playOption == 3) {playOption = `scissors <img src="imagens/tesouras.png" alt="" class="objecto"></img>`}
            if (ale == 1) {comOption = `stone <img src="imagens/pedra.png" alt="" class="objecto"></img>`}
            res.innerHTML="Computer won!"
            totalComputerWins+=1
        }else if(ale==2) {
            if(playOption == 3) {playOption = `scissors <img src="imagens/tesouras.png" alt="" class="objecto"></img>`}
            if (ale == 2) {comOption = `paper <img src="imagens/papel.png" alt="" class="objecto"></img>`}
            res.innerHTML=`${nome.value} Won!`
            totalPlayerWins+=1
        }else if(ale==3) {
            if(playOption == 3) {playOption = `scissors <img src="imagens/tesouras.png" alt="" class="objecto"></img>`}
            if (ale == 3) {comOption = `scissors <img src="imagens/tesouras.png" alt="" class="objecto"></img>`}
            res.innerHTML="DRAW"
            totalDraw+=1
        }
        res1.innerHTML = `<p>computer played ${comOption} </p>`
        res1.innerHTML += `<p> ${nome.value} played ${playOption}</p>`
        c+=1;
        if (c>=cont) {

            pedra.disabled=true;
            papel.disabled=true;
            tesoura.disabled=true; 
            res.innerHTML=`<p>You played ${c} times</p>`
            res.innerHTML+="Game OVER!"
           
            clicouStatus()
            return
        }else {
            res.innerHTML+=`<p>You played ${c} times</p>`
        }
    }
   