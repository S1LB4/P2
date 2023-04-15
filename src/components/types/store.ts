import { interChuck } from "./data";
export type Observed = ({ render:() => void} & HTMLElement);

export type AppState ={
    people: interChuck[]
}

export enum ChuckAction {
    "GET" = "GET",
}

export interface GetChuckAction{
    
    payload: interChuck[]
}

export type Actions = GetChuckAction;