import { Actions, AppState, Observed,} from "../types/store";

export let appState: AppState ={
    people:[]
}

let observed: Observed[] =[];

export const addObserved = (ref: Observed) => {observed = [...observed,ref]};