
// pedra = 0
// papel = 1
// tesoura = 2

let botao1= document.querySelector("#btn1");
let botao2= document.querySelector("#btn2");
let botao3= document.querySelector("#btn3");	

function oponente() {
	
	return Math.floor(Math.random()*(4 - 1));
}

const comparacao = (event) => {

	if( event.target.value == 0 && oponente() == 2){
		return console.log("Você ganhou"+event.target.value);
	} else if( event.target.value == 1 && oponente() == 0){
		return console.log("Você ganhou"+event.target.value);
	} else {
		return console.log("Você perdeu"+event.target.value);
	}
}


botao1.onclick = comparacao;
botao2.onclick = comparacao;
botao3.onclick = comparacao;