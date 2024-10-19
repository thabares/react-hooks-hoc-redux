import { BUY_BOOKS } from "./booksType"

const initialState = {
    numOfBooks: 30
}

const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_BOOKS: {
            return { ...state, numOfBooks: state.numOfBooks - 1 }
        }
        default: return state
    }
}

export default booksReducer