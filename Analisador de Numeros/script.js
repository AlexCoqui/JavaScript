// Captura os elementos HTML pelo ID
let num = document.getElementById('txtn')
let tab = document.getElementById('txttab')
let res = document.getElementById('res')

// Cria um array vazio para armazenar os valores
let valores = []

// Função que verifica se um valor é um número válido (entre 1 e 100)
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else {
        return false
    }
}

// Função que verifica se um número já está na lista de valores
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    }
}

// Função que adiciona um valor à lista de valores
function adicionar() {

    // Verifica se o valor é um número válido e não está na lista de valores
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value)) // Adiciona o valor ao array
        let item = document.createElement('option') // Cria um elemento <option>
        item.text = `Valor ${num.value} adicionado` // Define o texto do elemento
        tab.appendChild(item) // Adiciona o elemento à lista <select>
        res.innerHTML = '' // Limpa o campo de resultados
    }else{
        alert('Valor invalido ou já adicionado na lista')
    }

    num.value = '' // Limpa o campo de entrada de valores
    num.focus() // Move o cursor para o campo de entrada
}

// Função que calcula e exibe os resultados finais
function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar')
    }else {
       let tot = valores.length // Conta o número de valores na lista
       let maior = valores[0] // Define o primeiro valor como o maior e o menor
       let menor = valores[0]
       let soma = 0 // Inicializa a soma
       let media = 0 // Inicializa a média

       // Percorre a lista de valores e atualiza os valores de soma, maior e menor
       for(let pos in valores){
          soma += valores [pos] // Adiciona o valor atual à soma

          if (valores[pos] > maior){ // Atualiza o valor máximo se necessário
            maior = valores[pos]
          } else if (valores[pos] < menor){ // Atualiza o valor mínimo se necessário
            menor = valores [pos]
          }
       }

       media = soma/tot // Calcula a média dos valores

       // Exibe os resultados na tela
       res.innerHTML=''
       res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>` 
       res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
       res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
       res.innerHTML+= `<p>Somando todos os valores, temos ${soma}.</p>`
       res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}
