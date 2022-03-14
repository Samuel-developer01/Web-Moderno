function ligarDesliga(){

    let imagem = document.getElementById('lamp').src;
    let imagem_ligado = 'https://www.w3schools.com/js/pic_bulbon.gif';
    let imagem_desligado = 'https://www.w3schools.com/js/pic_bulboff.gif';
    
    if(imagem == imagem_ligado){
    	document.getElementById('lamp').src = imagem_desligado;
    } else {
    	document.getElementById('lamp').src = imagem_ligado;
    }
}
let = document.getElementById('lamp').src.onclick = ligarDesliga()