export class Model {
    #mezok = [];
    #meret;

    constructor(meret) {
        this.#meret = meret;
    }

    ujJatek() {
        this.#mezok = Array(this.#meret * this.#meret).fill(false);
    }

    mezoErtekValt(index) {
        this.#mezok[index] = !this.#mezok[index];
    }

    vege() {
        return this.#mezok.every((mez) => mez);
    }
}
