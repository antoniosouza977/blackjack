var input = document.getElementById('input')
var mao = document.getElementById('mao')
var dealer = document.getElementById('dealer')
var vet_cartas = [] 
var cont = 0;
var ás = 'nao'
var bt1 = document.getElementById('bt1')

let bt_parar = document.createElement('input')
bt_parar.setAttribute('value','Parar')
bt_parar.setAttribute('type','button')
bt_parar.setAttribute('class','botao')
bt_parar.setAttribute('onclick','parar()')
bt_parar.setAttribute('id','parar')

let bt_re = document.createElement('input')
bt_re.setAttribute('value','Reiniciar')
bt_re.setAttribute('type','button')
bt_re.setAttribute('class','botao')
bt_re.setAttribute('onclick','reiniciar()')

function gerarcarta(){
    
    let img_carta = document.createElement('img')
    let msg = document.createElement('p')
    msg.textContent = `Carta recebida:`
    let naipe = Math.floor(Math.random()*4) + 1
    if (n == 1){
        img_carta.setAttribute('src',`imagens/baralho/as-${naipe}.png`)
        dealer.appendChild(img_carta)   
    } else if ((n == 10) && (figura='sim)')){
        let fig = Math.floor(Math.random()*3) + 1
        if (fig == 1){
            img_carta.setAttribute('src',`imagens/baralho/j-${naipe}.png`)
            dealer.appendChild(img_carta) 
        } else if(fig ==2){
            img_carta.setAttribute('src',`imagens/baralho/q-${naipe}.png`)
            dealer.appendChild(img_carta) 
        }else if (fig == 3) {
            img_carta.setAttribute('src',`imagens/baralho/k-${naipe}.png`)
            dealer.appendChild(img_carta) 
        }   
    } else {
        img_carta.setAttribute('src',`imagens/baralho/${n}-${naipe}.png`)
        dealer.appendChild(img_carta)  
    }
}
function start(){
    let carta = Math.floor(Math.random()*11) + 1
    if (carta == 1){
         n = 1;
         ás = 'sim';
    }else if(carta == 11){
         n = 10;
         figura = 'sim';
    } else {
         n = carta;
         figura = 'não'
    }
    gerarcarta();
    vet_cartas.push(n);
    cont += n;
    mao.innerHTML = `<p class='pont'>PONTUAÇÂO : ${cont} PTs</p>`;
    if (ás == 'sim'){
        let botao_ás = document.createElement('input')
        botao_ás.setAttribute('value','Mudar o valor do Ás para 11')
        botao_ás.setAttribute('type','button')
        botao_ás.setAttribute('class','botao')
        botao_ás.setAttribute('onclick','mudaras()')
        mao.appendChild(botao_ás)
    };
    verSeGanhou(); 
     
    mao.appendChild(bt_parar) 
}
function mudaras(){
    cont += 10;
    mao.innerHTML = `<p class='pont'>PONTUAÇÂO : ${cont} PTs</p>`;
    verSeGanhou();
    ás = 'nao'
    mao.appendChild(bt_parar)
}
function verSeGanhou(){
    

    if (((cont == 11) && (figura == 'sim')) || (cont==21)){
        mao.innerHTML = `<p class='pont'>PONTUAÇÂO : ${cont} PTs</p>`;
        mao.innerHTML += `<P id='win'>PARABÉNS VOCE GANHOU</P>`
        mao.appendChild(bt_re)
        bt1.setAttribute('class','botao')
        bt1.setAttribute('disabled','disabled')
        removerBotoes();
    } else if (cont > 21){
        mao.innerHTML = `<p class='pont'>Estourou!! Fez: ${cont}</p>`;
        mao.innerHTML += `<p id='lose'>Voce perdeu</p>`
        mao.appendChild(bt_re)
        cont = 0
        vet_cartas = []
        ás = ''
        bt1.setAttribute('class','botao')
        bt1.setAttribute('disabled','disabled')
        removerBotoes();
    }
}
function reiniciar(){
    figura = '';
    cont = 0;
    vet_cartas = [];
    ás = '';
    bt1.setAttribute('class','botao')
    bt1.removeAttribute('disabled')
    bt_parar.setAttribute('class','botao')
    bt_parar.removeAttribute('disabled')
    mao.innerHTML = ''
    dealer.innerHTML = ''
    
}
function removerBotoes(){
    document.getElementsByClassName('botao').remove();
}
function parar(){
    let dif = 21 - cont;
    if (dif > 1) {
        mao.innerHTML = `<p class='pont'>PONTUAÇÂO : ${cont} PTs</p>`;
        mao.innerHTML += `<P id='lose'>Faltaram ${dif} pontos para a vitória.</P>`
    } else{
        mao.innerHTML = `<p class='pont'>PONTUAÇÂO : ${cont} PTs</p>`;
        mao.innerHTML += `<P id='win'>CARAMBA!! FOI POR POUCO.</P>`
    }
    mao.appendChild(bt_re)
    bt1.setAttribute('class','botao')
    bt1.setAttribute('disabled','disabled')
    removerBotoes();
}
  