import axios from 'axios'
import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE} from './userTypes'
export const fetchUsersRequest = () =>{
    return{
        type: FETCH_USERS_REQUEST
    }
}
export const fetchUsersSuccess = users =>{
    return{
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}
export const fetchUsersFailure = error =>{
    return{
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}
export const fetchUsers = () =>{
    return (dispatch) => {
        const api_key="b7d522f323e853483d6211bfb7dfab75"
         dispatch(fetchUsersRequest)
         axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1`)
            
            .then(response =>{
                 const users = response.data
                 dispatch(fetchUsersSuccess(users))
             })
             .catch(error => {
                 const errorMsg = error.message 
                 dispatch(fetchUsersFailure(errorMsg))
             })


        // const options = {
        //     method: 'GET',
        //     url: 'https://covid-19-data.p.rapidapi.com/country/all',
        //     headers: {
        //       'x-rapidapi-key': '8a485516e9msh525f2ba0f175732p185dc1jsn41ca554b996d',
        //       'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
        //     }
        //   };
          
        //   axios.request(options).then(function (response) {
        //       console.log(response.data);
        //       console.log("hii")
        //   }).catch(function (error) {
        //       console.error(error);
        //   });

            
    }
}