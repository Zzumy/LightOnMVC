export class Mezo {
    #mezoElem;

    constructor(szuloElem, index) {
        this.#mezoElem = $("<div>").addClass("mezo zold").appendTo(szuloElem);

        this.#mezoElem.on("click", () => {
            this.#LampaKattintasEvent(index);
        });
    }

    #LampaKattintasEvent(index) {
        window.dispatchEvent(
            new CustomEvent("lampaKattintas", {
                detail: {
                    index: index,
                },
            })
        );
    }

    mezoAllapotValt() {
        this.#mezoElem.toggleClass("sarga zold");
    }
}
