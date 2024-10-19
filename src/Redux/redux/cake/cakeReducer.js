import { Buy_Cake } from "./cakeType"

const initialState = {
    numberOfCakes: 10
}

const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case Buy_Cake:
            return { ...state, numberOfCakes: state.numberOfCakes - 1 }

        default: return state
    }
}

export default cakeReducer;