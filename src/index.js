"use strict";
//Crie um enum chamado Prioridade com os seguintes valores
var Prioridade;
(function (Prioridade) {
    Prioridade[Prioridade["Baixa"] = 1] = "Baixa";
    Prioridade[Prioridade["Media"] = 2] = "Media";
    Prioridade[Prioridade["Alta"] = 3] = "Alta";
})(Prioridade || (Prioridade = {}));
//Crie uma função chamada criarTarefa que aceita um título, uma descrição e uma prioridade como 
//parâmetros e retorna um objeto do tipo Tarefa com o campo concluida inicializado como false. Ex:
function criarTarefa(titulo, descricao, prioridade) {
    let tarefa = {
        titulo: titulo,
        descricao: descricao,
        prioridade: prioridade,
        concluida: false,
    };
    return tarefa;
}
//Crie uma função chamada exibirTarefa que aceita um objeto do tipo Tarefa e imprime uma string 
//formatada com o título, a prioridade e o status (concluida ou não).
function exibirTarefa(tarefa) {
    return `Tarefa: ${tarefa.titulo}\nPrioridade: ${tarefa.prioridade}\nStatus: ${tarefa.concluida ? "Concluida" : "Pendente"}`;
}
//Crie uma função chamada concluirTarefa que aceita um objeto do tipo Tarefa e altera o valor de 
//concluida para true.
function concluirTarefa(tarefa) {
    if (typeof (tarefa) == undefined || typeof (tarefa) == null) {
        return "Tarefa enviada vazia ou nula.";
    }
    tarefa.concluida = true;
    return "Tarefa concluida com sucesso.";
}
let tarefaInicial = criarTarefa("Ligar PC", "Apertar o botão Power da CPU", 2);
console.log(exibirTarefa(tarefaInicial));
concluirTarefa(tarefaInicial);
console.log(exibirTarefa(tarefaInicial));
