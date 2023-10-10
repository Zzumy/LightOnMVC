import { Model } from "../Model/Model.js";
import { UjJatek } from "../View/UjJatek.js";
import { JatekTer } from "../View/JatekTer.js";

export class Controller {
    #model;
    #jatekTerView;
    #ujJatekView;

    constructor(meret) {
        this.#model = new Model(meret);
        this.#jatekTerView = new JatekTer($("#jatekter"), meret);
        this.#ujJatekView = new UjJatek($("#ujJatek"));

        $(window).on("lampaKattintas", (event) => this.#LampaKattintas(event));
        $(window).on("ujJatek", () => this.#ujJatek());

        this.#ujJatek();
    }

    #LampaKattintas(event) {
        const index = event.detail.index;
        this.#model.mezoErtekValt(index);
        this.#jatekTerView.mezoAllapotValt(index);
    }

    #ujJatek() {
        this.#model.ujJatek();
        this.#jatekTerView.ujJatek();
    }
}
