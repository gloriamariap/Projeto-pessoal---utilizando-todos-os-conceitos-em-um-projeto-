

const projetos = [
    new Projeto("Projeto 1", "Descrição do Projeto 1"),
    new ProjetoEspecial("Projeto 2", "Descrição do Projeto 2", "JavaScript")
];

const container = document.getElementById('projetos-container');
projetos.forEach(projeto => {
    container.innerHTML += projeto.exibirProjeto();
});
