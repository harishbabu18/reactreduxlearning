import { BUY_CAKE } from "./cakeType"

const initialState = {
    numberofCakes: 10
}

const cakeReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numberofCakes:state.numberofCakes -1
        }
        default:return state
    }
}

export default cakeReducer