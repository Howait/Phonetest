const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/check.png" alt="Confirmação" />';
const imgReprovado = '<img src="./images/X.png" alt="Confirmação" />';
const contato = [];
const tel = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'


let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputContactDetails = document.getElementById('Nome-do-contato');
    const inputContactNumber = document.getElementById('Número-de-contato');

    contato.push(inputContactDetails.value);
    tel.push(parseFloat(inputContactNumber.value));

    let linha = '<tr>';
    linha += `<td>${inputContactDetails.value}</td>`;
    linha += `<td>${inputContactNumber.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    inputContactDetails.value = '';
    inputContactNumber.value = '';
};

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
};
