import {FriendsPageDataType} from "../Redux/Types";
import {InitialState} from "../Redux/InitialState";

const initialState = InitialState.FriendsPage

export const friendsPageReducer = (state:FriendsPageDataType = initialState, action: any) =>{
    return state
}