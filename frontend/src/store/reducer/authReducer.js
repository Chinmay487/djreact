import {AUTH_START,AUTH_SUCCESS,AUTH_FAIL,AUTH_LOGOUT} from '../action/actionTypes';
// import {updateObject} from '../utils'

const initialState = {
    token : null,
    error : null,
}


const authStart = (state,action) => {
    // return updateObject(state,{spinner:true,error:null});
    return {
        ...state,
        error : null
    }
}

const authSuccess = (state,action) => {
    // return updateObject(state,{spinner:false,token:action.token});
    return {
        ...state,
        spinner : false,
        token : action.token
    }
}

const authFail = (state,action) => {
    // return updateObject(state,{error:action.error,spinner:false});
    return {
        ...state,
        error : action.error,
        spinner : false
    }
}

const authLogout = (state,action) => {
    // return updateObject(state,{token:null});
    return {
        ...state,
        token : null,
    }
}



const authReducer = (state=initialState,action) => {
    switch(action.type){
        case AUTH_START :return authStart(state,action);
        case AUTH_SUCCESS :return authSuccess(state,action);
        case AUTH_FAIL :return authFail(state,action);
        case AUTH_LOGOUT :return authLogout(state,action);
        default : return state;
    }
}


export default authReducer;


