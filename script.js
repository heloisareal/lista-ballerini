function adicionarTarefa() {
    // Buscando no html um elemento que possui o input inputTarefa
    const textoTarefa = document.getElementById("inputTarefa");
    // Pegamos a variável acima e retiramos o valor dela e armazenamos em tarefa
    let tarefa = textoTarefa.value.trim();

    // 
    const report = document.getElementById("mensagem");


    if (tarefa === "") {
        let mensagemErro = "Digite uma tarefa antes de adicionar!"
        report.textContent = mensagemErro
        report.style.color = 'red'
    } else {
        let mensagemSucesso =  "Tarefa adicionada com sucesso!"
        report.textContent = mensagemSucesso
        report.style.color = 'green'
        // Pegando no html o elemento que tem o id de listaTarefas, sendo o ul
        const lista = document.getElementById("listaTarefas");
        // Colocando o elemento li e colocando dentro de uma variável novaTarefa
        let novaTarefa = document.createElement("li");

        // Finalmente colocando no li o conteúdo de tarefa, sendo o valor do texto digitado no input 
        novaTarefa.textContent = tarefa;

        // Pegamos o elemento ul, e adicionamos o elemento filho li
        lista.appendChild(novaTarefa); // Adicionando na li
    }

    textoTarefa.value = "";//Limpar automaticamente após envio 

}