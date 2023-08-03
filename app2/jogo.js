// alert('Teste!')

var altura = 0 
var lagura = 0

function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

	function posicaoRandomica() {

	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	console.log(posicaoX, posicaoY)

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY 

	//criar o elemento html
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosquito.png'
	mosquito.className = 'mosquito1'
	mosquito.style.left = posicaoX + 'px'
	// mosquito.style.left = (0-90) + 'px'
	mosquito.style.top = posicaoY + 'px'
	// mosquito.style.top = (0-90) + 'px'
	mosquito.style.position = 'absolute'

	document.body.appendChild(mosquito)
	}