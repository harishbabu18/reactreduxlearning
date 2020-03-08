import {FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE} from './userType' 
import axios from 'axios'

 const fetchUsersRequest = () => {
    return{
        type:FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = users => {
    return{
        type:FETCH_USERS_SUCCESS,
        payload:users
    }
}

const fetchUsersFailure = error => {
    return{
        type:FETCH_USERS_FAILURE,
        payload:error
        
    }
}
export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest)
        axios.get('http://localhost:8080/company')
        .then(response => {
            const users = response.data.company
            dispatch(fetchUsersSuccess(users))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchUsersFailure(errorMsg))
        }
        )
    }
}