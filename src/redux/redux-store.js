import { combineReducers, legacy_createStore } from "redux";
import { profileReducer } from "./profile-reducer";
import { dialogsReducer } from "./dialogs-reducer";
import { usersReducer } from "./users-reduser";

let reducers = combineReducers({
    postsPage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
});

let store = legacy_createStore(reducers);

export default store;