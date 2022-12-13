export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    static adiciona(negociacao) {
        throw new Error('Method not implemented.');
    }
    static lista() {
        throw new Error('Method not implemented.');
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
