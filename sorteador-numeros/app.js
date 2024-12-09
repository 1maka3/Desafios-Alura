function sortear() {
    const quantidade = parseInt(document.getElementById("quantidade").value);
    const de = parseInt(document.getElementById("de").value);
    const ate = parseInt(document.getElementById("ate").value);
    const resultadoDiv = document.getElementById("resultado");

    if (isNaN(quantidade) || isNaN(de) || isNaN(ate)) {
        resultadoDiv.innerHTML = "<label class='texto__paragrafo'>Por favor, preencha todos os campos corretamente.</label>";
        return;
    }
    if (de >= ate) {
        resultadoDiv.innerHTML = "<label class='texto__paragrafo'>O valor 'Do número' deve ser menor que 'Até o número'.</label>";
        return;
    }
    if (quantidade > (ate - de + 1)) {
        resultadoDiv.innerHTML = "<label class='texto__paragrafo'>Não é possível sortear essa quantidade de números únicos no intervalo escolhido.</label>";
        return;
    }

    const numeros = new Set();
    while (numeros.size < quantidade) {
        const numero = Math.floor(Math.random() * (ate - de + 1)) + de;
        numeros.add(numero);
    }

    resultadoDiv.innerHTML = `<label class='texto__paragrafo'>Números sorteados: ${[...numeros].join(", ")}</label>`;

    const btnReiniciar = document.getElementById("btn-reiniciar");
    btnReiniciar.classList.remove("container__botao-desabilitado");
    btnReiniciar.classList.add("container__botao");
    btnReiniciar.disabled = false;
}

function reiniciar() {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    document.getElementById("resultado").innerHTML = "<label class='texto__paragrafo'>Números sorteados: nenhum até agora</label>";

    const btnReiniciar = document.getElementById("btn-reiniciar");
    btnReiniciar.classList.remove("container__botao");
    btnReiniciar.classList.add("container__botao-desabilitado");
    btnReiniciar.disabled = true;
}