import Card, {Attribute} from "../api/categories";
import { getpeople } from "../store/action";
import { addObserved, appState } from "../store/index";
import { GetChuckAction } from "../types/store";

class Dashboard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"})
        addObserved(this)
    }
    async connectedCallback(){
        const action = await getpeople();
        dispatch(action)
    }

    render(){
        appState.people.forEach((data:any) => {
            const ChuckCard = this.ownerDocument.createElement("my-card") as Card;
            ChuckCard.setAttribute(Attribute.animal, data.name);
            ChuckCard.setAttribute(Attribute.career, data.height);
            ChuckCard.setAttribute(Attribute.celebrity, data.mass);
            ChuckCard.setAttribute(Attribute.animal, data.dev);
            ChuckCard.setAttribute(Attribute.career, data.explicit);
            ChuckCard.setAttribute(Attribute.celebrity, data.fashion);
            ChuckCard.setAttribute(Attribute.animal, data.food);
            ChuckCard.setAttribute(Attribute.career, data.history);
            ChuckCard.setAttribute(Attribute.celebrity, data.money);
            ChuckCard.setAttribute(Attribute.animal, data.movie);
            ChuckCard.setAttribute(Attribute.career, data.music);
            ChuckCard.setAttribute(Attribute.celebrity, data.political);
            ChuckCard.setAttribute(Attribute.animal, data.religion);
            ChuckCard.setAttribute(Attribute.career, data.science);
            ChuckCard.setAttribute(Attribute.celebrity, data.sport);
            ChuckCard.setAttribute(Attribute.celebrity, data.travel);
           

            this.shadowRoot?.appendChild(ChuckCard)
        })
    }
}

customElements.define("app-dashboard", Dashboard)

function dispatch(action: GetChuckAction) {
    throw new Error("Missing Function.");
}
