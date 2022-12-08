import {NavBarDataType} from "../Redux/Types";
import {InitialState} from "../Redux/InitialState";

const initialState =  InitialState.NavBarPage

export const navbarPageReducer = (state:NavBarDataType = initialState, action: any) =>{
    return state
}