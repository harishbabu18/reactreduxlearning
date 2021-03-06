import {FETCH_COMPANYS_REQUEST,FETCH_COMPANYS_SUCCESS,LOADMORE_COMPANYS_SUCCESS,FETCH_COMPANYS_FAILURE} from './companyType' 
import axios from 'axios'
 const fetchCompanysRequest = () => {
    return{
        type:FETCH_COMPANYS_REQUEST
    }
}

const fetchCompanysSuccess = (companys,max,order,sort,offset) => {
    return{
        type:FETCH_COMPANYS_SUCCESS,
        payload:companys,
        payloadmax:max,
        payloadorder:order,
        payloadsort:sort,
        payloadoffset:offset
    }
}

const fetchCompanysFailure = error => {
    return{
        type:FETCH_COMPANYS_FAILURE,
        payload:error
        
    }
}


const loadCompanysSuccess = (companys,max,order,sort,offset) => {
    return{
        type:LOADMORE_COMPANYS_SUCCESS,
        payload:companys,
        payloadmax:max,
        payloadorder:order,
        payloadsort:sort,
        payloadoffset:offset
        
    }
}

export const loadCompanys = (sort,order,max,offset) => {
    return (dispatch) => {
        dispatch(fetchCompanysRequest)
        axios.get('http://localhost:8080/company?max='+max+'&offset='+offset+'&order='+order+'&sort='+sort)
        .then(response => {
            var companys = response.data.company
            dispatch(loadCompanysSuccess(companys,max,order,sort,offset))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchCompanysFailure(errorMsg))
        }
        )
    }
}

export const fetchCompanys = (sort,order,max,offset) => {
    return (dispatch) => {
        dispatch(fetchCompanysRequest)
        axios.get('http://localhost:8080/company?max='+max+'&offset='+offset+'&order='+order+'&sort='+sort)
        .then(response => {
            var companys = response.data.company
            dispatch(fetchCompanysSuccess(companys,max,order,sort,offset))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchCompanysFailure(errorMsg))
        }
        )
    }
}