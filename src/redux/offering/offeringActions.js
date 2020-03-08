import {FETCH_OFFERINGS_REQUEST,FETCH_OFFERINGS_SUCCESS,FETCH_OFFERINGS_FAILURE} from './offeringType' 
import axios from 'axios'

 const fetchOfferingsRequest = () => {
    return{
        type:FETCH_OFFERINGS_REQUEST
    }
}

const fetchOfferingsSuccess = offerings => {
    return{
        type:FETCH_OFFERINGS_SUCCESS,
        payload:offerings
    }
}

const fetchOfferingsFailure = error => {
    return{
        type:FETCH_OFFERINGS_FAILURE,
        payload:error
        
    }
}
const 

export const fetchOfferings = () => {
    return (dispatch) => {
        dispatch(fetchOfferingsRequest)
        axios.get('http://teraretbetaapi-env.3s22ejt32d.ap-south-1.elasticbeanstalk.com/company?offset='+offset+'&max='+max)
        .then(response => {
            const offerings = response.data
            dispatch(fetchOfferingsSuccess(offerings))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchOfferingsFailure(errorMsg))
        }
        )

    }

}