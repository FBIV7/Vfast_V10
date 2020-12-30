import {
    LOGIN_FAIL,
    LOGIN_SUCCESS,
} from '../actions/types.js'

const initialState ={
    token: localStorage.getItem('token'),
    isAuthenticated: null,
}

export default function(state= initialState,action){
  const {type ,payload}= action;

  
    switch(type){     
        case LOGIN_SUCCESS:
            localStorage.setItem('token',payload.token);
            console.log(payload);
            return{
                ...state,
                ...payload,
                isAuthenticated:true,
            }
        case LOGIN_FAIL: 
            localStorage.removeItem('token');
            return{
                ...state,
                isAuthenticated:false,
            }      

         default:
                return state;
    }
}