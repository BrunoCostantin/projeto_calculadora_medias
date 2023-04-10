const form = document.getElementById("form-atividade")//cria uma variável com id do formulário
const imgAprovado = "<img src='./images/aprovado.png' alt='emoji festajando'/>" // cria uma variável para a imagem de aprovação
const imgReprovado = "<img src='./images/reprovado.png' alt='emoji decepcionado'/>"
const atividades = []
const notas = []
const spanAprovado = "<span class='resultado aprovado'>Aprovado</span>" // chama essa linha do cod HTML quando aprovado
const spanReprovado = "<span class='resultado reprovado'>Reprovado</span>" // chama essa linha do cod HTML quando reprovado
const notaMinima = parseFloat(prompt("Digite a média para passar:"))

let linhas = "" //adicionar uma nova linha // tem q ser colocado aqui no evento global para que não seja apagado

form.addEventListener("submit", function(e){// cria o evento do submit
    e.preventDefault() //tira o evendo de atualiza a pagina
    
    adicionaLinha()// chama a função   adicionaLinha
    atuaLizaTabela() // chama a função   atuaLizaTabela
    atualizaMediaFinal()
    //alert(`Atividade: ${inputNomeAtividade.value} - Nota: ${inputNotaAtividade.value} `) // Chama na tela o texto com os valores escritos pelo usuário
})

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById("mome-atividade") //cria uma variável para buscar o nome da atividade
    const inputNotaAtividade = document.getElementById("nota-atividade") //cria uma variável para buscar a nota da atividade

    if (atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida`) //Cria a regra de não deixar inserir a mesma atividade
    } else {
        atividades.push(inputNomeAtividade.value) // sempre q for adicionado será chamdo esse conteudo nos arrays
        notas.push(parseFloat(inputNotaAtividade.value))

        let linha = "<tr>" // adicionando a atividade, nota e aprovação no corpo da tabela. como uma linha
        linha += `<td>${inputNomeAtividade.value}</td>` //o += é uma concatenação o | linha = linha + "conteudo" // Primeira coluna
        linha += `<td>${inputNotaAtividade.value}</td>` // segunda coluna
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>` // para validar se o aluno foi aprovado ou não // TERNÁRIO: if - ? | : = esle
        linha += '</tr>'

        linhas += linha //adicionar uma nova linha
    }

    inputNomeAtividade.value = ""
    inputNotaAtividade.value = ""
}

function atuaLizaTabela() {
    const corpoTabela = document.querySelector("tbody") // cria uma variável para criar o conteúde de cima dentro do corpo da tabela no arquivo HTML com o .innerHTML
    corpoTabela.innerHTML = linhas
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal()

    document.getElementById("media-final-valor").innerHTML = mediaFinal
    document.getElementById("media-final-resultado").innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado
}

function calculaMediaFinal() {
    let somaDasNotas = 0

    for (let i = 0; i < notas.length; i++) { // função para somar as notas
        somaDasNotas += notas[i]
    }

    return somaDasNotas / notas.length // variável para fazer a média das notas
}