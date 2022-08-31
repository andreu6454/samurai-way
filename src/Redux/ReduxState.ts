import {combineReducers, createStore} from "redux";
import {messagesReducer} from "../Reducers/messagesReducer";
import {postsReducer} from "../Reducers/postsReducer";

let reducers = combineReducers({
    messagesReducer,
    postsReducer
})

export const store = createStore(reducers,);