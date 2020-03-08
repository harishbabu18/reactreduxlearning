import {FETCH_OFFERINGS_REQUEST,FETCH_OFFERINGS_SUCCESS,FETCH_OFFERINGS_FAILURE} from './offeringType' 

const initialState = {
    loading:false,
    offset:0,
    max:10,
    offerings:[],
    error:'',
}

const offeringReducer = (state = initialState,action) => {
    switch(action.type){
        case FETCH_OFFERINGS_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_OFFERINGS_SUCCESS:
            return {
                loading: false,
                max: state.max +10,
                offerings:action.payload,
                error:''
            }
        case LOAD_MORE_OFFERINGS_SUCCESS:
            return {
                ...state,
                loading: false,
                offset: state.offset+10,
                max: state.max +10,
                offerings: [...payload,...action.payload],
                error:''
            }   
        case FETCH_OFFERINGS_FAILURE:
            return{
                loading: false,
                offerings:[],
                error: action.payload
            }
       default: return state          

    }
}

export default offeringReducer