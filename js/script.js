const form = document.getElementById("form");
let linhas = '';
const atividades = [];
const notas = [];
const spanAprovado = `<span class="resultado aprovado"> Aprovado </span>`;
const spanReprovado = `<span class="resultado reprovado"> Reprovado </span>`;
const notaMin = parseFloat(prompt ('Digite a nota mínima:'));

form.addEventListener('submit',function(e) {
    e.preventDefault();

    adicionarLinha ();
    atualizaTabela ();
    atualizaMediafinal ();
});

function adicionarLinha () {
    
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida`)
    } else {
    
    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value))

    let linha = `<tr>`;
    linha += `<td> ${inputNomeAtividade.value} </td>`;
    linha += `<td> ${inputNotaAtividade.value} </td>`;
    linha += `<td class ="bgfeliztriste"> ${inputNotaAtividade.value >= notaMin ? ':)': ':('} </td> `;
    linha += `</tr>`;
    linhas += linha;

    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela () {
    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas;
}

function atualizaMediafinal () {
    const mediaFinal = calculaMediaFinal ();
    document.getElementById('mediafinal').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('mediafinalresultado').innerHTML = mediaFinal >= notaMin ? spanAprovado : spanReprovado;
}

function calculaMediaFinal () {
    let somaNotas = 0;
    for (let i = 0; i < notas.length; i++ ){
        somaNotas += notas[i];
    }

    return somaNotas / notas.length;
}