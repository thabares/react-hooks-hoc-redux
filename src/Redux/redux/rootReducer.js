import { combineReducers } from "redux";
import booksReducer from "./books/booksReducer";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    books: booksReducer,
    users: userReducer
})

export default rootReducer