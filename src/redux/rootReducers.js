import { combineReducers } from 'redux'
import  cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import userReducer from './user/userReducer'
import companyReducer from './company/companyReducer'

const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    company:companyReducer,
    user:userReducer,
})

export default rootReducer