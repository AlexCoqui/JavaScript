function calcular() {
    let res = document.getElementById('res');
    let a = Number(prompt('Qual é o valor de a?'));
    let b = Number(prompt('Qual é o valor de b?'));
    let c = Number(prompt('Qual é o valor de c?'));
     
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert('[ERRO] não foi digitado um número válido.');
        res.innerHTML = ''
    } else {
        let delta = b ** 2 - 4 * a * c;
        res.innerHTML = `A equação atual é <strong>${a}x² + ${b}x + ${c} = 0</strong><br><br>
         O cálculo realizado é: <strong>&Delta; = ${b}<sup>2</sup> - 4 . ${a} . ${c} = ${delta}</strong><br><br>
         O valor calculado foi <mark><strong>&Delta; = ${delta}</strong></mark>.`;
    }
}
