import {FETCH_COMPANYS_REQUEST,FETCH_COMPANYS_SUCCESS,FETCH_COMPANYS_FAILURE} from './companyType' 

const initialState = {
    loading:false,
    loadingmore:false,
    companys:[],
    offset:0,
    sort:'name',
    order:'asc',
    max:10,
    error:'',
}

const companyReducer = (state = initialState,action) => {
    switch(action.type){
        case FETCH_COMPANYS_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_COMPANYS_SUCCESS:
            return {
                ...state,
                loading: false,
                offset:state.offset+10,
                companys:[...state.companys,...action.payload],
                error:''
            } 
        case FETCH_COMPANYS_FAILURE:
            return{
                loading: false,
                companys:[],
                error: action.payload
            }
       default: return state          

    }
}

export default companyReducer