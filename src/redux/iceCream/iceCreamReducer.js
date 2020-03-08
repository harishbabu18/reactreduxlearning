import { BUY_ICE_CREAM } from "./iceCreamType"

const initialState = {
    numberofIceCream: 10
}

const iceCreamReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_ICE_CREAM: return {
            ...state,
            numberofIceCream:state.numberofIceCream -1
        }
        default:return state
    }
}

export default iceCreamReducer