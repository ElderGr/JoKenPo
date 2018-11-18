
// pedra = 0
// papel = 1
// tesoura = 2

let botao1= document.querySelector("#btn1");
let botao2= document.querySelector("#btn2");
let botao3= document.querySelector("#btn3");	
let jogador1 = document.querySelector('#jogador');
let jogador2 = document.querySelector('#oponente');
let resultado = document.querySelector('#resultado');

function oponente() {
	
	return Math.floor(Math.random()*(4 - 1));
	
}

const comparacao = (event) => {

	// armazena o valor aleatorio numa variavel;
	let aleatorio = oponente();

	// definiçao das maos de cada jogador
	jogador1.src = 'assets/image/'+event.target.value+'.png';
	jogador2.src = 'assets/image/'+aleatorio+'Invertida.png';


	if( (event.target.value == 0 && aleatorio == 2) || (event.target.value == 1 && aleatorio == 0) ){
		resultado.innerHTML = "Você ganhou!";
		resultado.style.color ='green';
	} else if( (event.target.value == 0 && aleatorio == 0) || (event.target.value == 1 && aleatorio == 1)|| (event.target.value == 2 && aleatorio == 2) ){
		resultado.innerHTML = "Empate!";
		resultado.style.color ='grey'
	} else {
		resultado.innerHTML = "Você perdeu!";
		resultado.style.color ='red';
	}

	
}


botao1.onclick = comparacao;
botao2.onclick = comparacao;
botao3.onclick = comparacao;