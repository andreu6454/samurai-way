import {combineReducers, createStore} from "redux";
import {navbarPageReducer} from "./Reducers/navbarPageReducer";
import {friendsPageReducer} from "./Reducers/friendsPageReducer";
import {profilePageReducer} from "./Reducers/profilePageReducer";
import {messagePageReducer} from "./Reducers/messagePageReducer";
import {usersPageReducer} from "./Reducers/usersPageReducer";

export let reducers = combineReducers({
    ProfilePage: profilePageReducer,
    MessagesPage: messagePageReducer,
    NavBarPage: navbarPageReducer,
    FriendsPage: friendsPageReducer,
    UsersPage: usersPageReducer
})
export type AppRootStateType = ReturnType<typeof reducers>

export const store = createStore(reducers);