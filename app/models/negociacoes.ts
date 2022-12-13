import { Negociacao } from './negociacao.js';

export class Negociacoes {
    static adiciona(negociacao: Negociacao) {
        throw new Error('Method not implemented.');
    }
    static lista(): any {
        throw new Error('Method not implemented.');
    }
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }
}