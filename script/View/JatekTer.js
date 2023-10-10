import { Mezo } from "./Mezo.js";

export class JatekTer {
    #szuloElem;
    #mezok;
    #meret;

    constructor(szuloElem, meret) {
        this.#szuloElem = szuloElem;
        this.#meret = meret;
        szuloElem.css("grid-template-columns", `repeat(${meret}, 1fr)`);
    }

    ujJatek() {
        this.#szuloElem.html("");
        this.#mezok = [];
        for (let i = 0; i < this.#meret * this.#meret; i++) {
            this.#mezok.push(new Mezo(this.#szuloElem, i));
        }
    }

    mezoAllapotValt(index) {
        this.#mezok[index].mezoAllapotValt();
    }
}
