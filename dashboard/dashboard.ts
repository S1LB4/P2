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
            ChuckCard.setAttribute(Attribute.animal, data.animal);
            ChuckCard.setAttribute(Attribute.career, data.career);
            ChuckCard.setAttribute(Attribute.celebrity, data.celebrity);
            ChuckCard.setAttribute(Attribute.dev, data.dev);
            ChuckCard.setAttribute(Attribute.explicit, data.explicit);
            ChuckCard.setAttribute(Attribute.fashion, data.fashion);
            ChuckCard.setAttribute(Attribute.food, data.food);
            ChuckCard.setAttribute(Attribute.history, data.history);
            ChuckCard.setAttribute(Attribute.money, data.money);
            ChuckCard.setAttribute(Attribute.movie, data.movie);
            ChuckCard.setAttribute(Attribute.music, data.music);
            ChuckCard.setAttribute(Attribute.political, data.political);
            ChuckCard.setAttribute(Attribute.religion, data.religion);
            ChuckCard.setAttribute(Attribute.science, data.science);
            ChuckCard.setAttribute(Attribute.sport, data.sport);
            ChuckCard.setAttribute(Attribute.travel, data.travel);
           

            this.shadowRoot?.appendChild(ChuckCard)
        })
    }
}

customElements.define("app-dashboard", Dashboard)

function dispatch(action: GetChuckAction) {
    throw new Error("Missing Function.");
}
