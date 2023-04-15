import style from "./categories"

export enum Attribute {
    "animal" = "animal",
    "career" = "career",
    "celebrity" = "celebrity",
    "dev" = "dev",
    "explicit" = "explicit",
    "fashion" = "fashion",
    "food" = "food",
    "history" = "history",
    "money" = "money",
    "movie" = "movie",
    "music" = "music",
    "political" = "political",
    "religion" = "religion",
    "science" = "science",
    "sport" = "sport",
    "travel" = "travel",
}

class Card extends HTMLElement {

    animal?: string;
    career?: string;
    celebrity?: string;
    dev?: string;
    explicit?: string;
    fashion?: string;
    food?: string;
    history?: string;
    money?: string;
    movie?: string;
    music?: string;
    political?: string;
    religion?: string;
    science?: string;
    sport?: string;
    travel?: string;

    static get observedAttributes() {
        const attrs: Record<Attribute, null> = {
            animal: null,
            career: null,
            celebrity: null,
            dev: null,
            explicit: null,
            fashion: null,
            food: null,
            history: null,
            money: null,
            movie: null,
            music: null,
            political: null,
            religion: null,
            science: null,
            sport: null,
            travel: null,

        };
        return Object.keys(attrs);
    }

constructor() {
    super();
    this.attachShadow({ mode: "open" });
}

connectedCallback() {
    this.render();
}

attributeChangedCallback(
    propName: Attribute,
    _: string | undefined,
    newValue: string | undefined
) {
    switch (propName) {

        default:
            this[propName] = newValue;
            break;
    }

    this.render();
}

render(){
    if (this.shadowRoot) {
        this.shadowRoot.innerHTML = ``

        const css = this.ownerDocument.createElement("style");
        css.innerHTML = style;
        this.shadowRoot?.appendChild(css);

        this.shadowRoot.innerHTML += `
            <section class = "Card">
            <h1>${this.animal}</h1>
            <h1>${this.career}</h1>
            <h1>${this.celebrity}</h1>
            <h1>${this.dev}</h1>
            <h1>${this.explicit}</h1>
            <h1>${this.fashion}</h1>
            <h1>${this.food}</h1>
            <h1>${this.history}</h1>
            <h1>${this.money}</h1>
            <h1>${this.movie}</h1>
            <h1>${this.music}</h1>
            <h1>${this.political}</h1>
            <h1>${this.religion}</h1>
            <h1>${this.science}</h1>
            <h1>${this.sport}</h1>
            <h1>${this.travel}</h1>
            </section>
            `;
    }
}}

customElements.define("my-card", Card);
export default Card;
