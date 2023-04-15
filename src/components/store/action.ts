import {traer_api} from "../services/data";
import { GetChuckAction } from "../types/store";

export const getpeople = async (): Promise<GetChuckAction> => {
    const norris = await traer_api();
    return{
        
        payload: norris
    }
}