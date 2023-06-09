import style from "./categories"

export enum Attribute {
    "value" = "value",
}

class Card extends HTMLElement {

    value?: string;

    static get observedAttributes() {
        const attrs: Record<Attribute, null> = {
            value: null,
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
            <section class = "card">
            <h1>${this.value}</h1>
            </section>
            `;
    }
}}

customElements.define("my-card", Card);
export default Card;
