export class UjJatek {
    constructor(szuloElem) {
        szuloElem.html(`
            <button id="ujJatekButton">Új játék</button>
        `);
        $("#ujJatekButton").on("click", () => this.#UjJatekEvent());
    }

    #UjJatekEvent() {
        window.dispatchEvent(new CustomEvent("ujJatek"));
    }
}
