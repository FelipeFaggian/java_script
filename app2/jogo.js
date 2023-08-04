// alert('Teste!')

var altura = 0 
var lagura = 0
var vidas = 1
var tempo = 15

function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {
	
	tempo -= 1

	if (tempo < 0) {
				clearInterval(cronometro)
				clearInterval(criaMosquito)
				// alert('Vitória!')
				window.location.href = 'vitoria.html'
			} else {
				document.getElementById('cronometro').innerHTML = tempo
			}
	
	}, 1000)

	function posicaoRandomica() {

	//remover o mosquito anterior(caso exista)
	if (document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()

		// console.log('O elemento selecionado foi: v' + vidas)
		if (vidas > 3) {
			// alert('Game Over!')
			window.location.href = 'fim_de_jogo.html'
		} else {
		document.getElementById('v' + vidas).src='imagens/coracao_vazio.png'

		vidas++
	 }
	}
	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	console.log(posicaoX, posicaoY)

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY 

	//criar o elemento html
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosquito.png'
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.left = posicaoX + 'px'
	// mosquito.style.left = (0-90) + 'px'
	mosquito.style.top = posicaoY + 'px'
	// mosquito.style.top = (0-90) + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function() {
		// alert('Elemento clicado a tempo!')
		this.remove()
	}

	document.body.appendChild(mosquito)

	// console.log(tamanhoAleatorio())
	// console.log(ladoAleatorio())
	}

	function tamanhoAleatorio() {
		var classe = Math.floor(Math.random() * 3)
		// console.log(classe)
		switch(classe) {

		case 0:
			return 'mosquito1'

		case 1: 
			return 'mosquito2'

		case 2:
			return 'mosquito3'			

		}
	}

	function ladoAleatorio() {
		var classe = Math.floor(Math.random() * 2)
		// console.log(classe)
		switch(classe) {

		case 0:
			return 'ladoA'

		case 1: 
			return 'ladoB'			

		}	
	}