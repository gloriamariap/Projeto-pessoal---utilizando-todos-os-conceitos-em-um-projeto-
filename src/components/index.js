class Projeto {
    constructor(titulo, descricao) {
        this.titulo = titulo;
        this.descricao = descricao;
    }

    exibirProjeto() {
        return `<div class="projeto">
                    <h3>${this.titulo}</h3>
                    <p>${this.descricao}</p>
                </div>`;
    }
}

class ProjetoEspecial extends Projeto {
    constructor(titulo, descricao, tecnologia) {
        super(titulo, descricao);
        this.tecnologia = tecnologia;
    }

    exibirProjeto() {
        return `<div class="projeto especial">
                    <h3>${this.titulo}</h3>
                    <p>${this.descricao}</p>
                    <p><strong>Tecnologia:</strong> ${this.tecnologia}</p>
                </div>`;
    }
}