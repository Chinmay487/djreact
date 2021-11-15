import {AUTH_START,AUTH_SUCCESS,AUTH_FAIL,AUTH_LOGOUT} from './actionTypes'
import axios from 'axios';


export const authStart = () => {
    console.log('auth start')
    return {
        type : AUTH_START
    }
}

export const authSuccess = (token) => {
    console.log('auth success')
    return {
        type : AUTH_SUCCESS,
        token : token,
    }
}

export const authFail = (error) => {
    console.log('auth failed')
    return {
        type : AUTH_FAIL,
        error : error
    }
}

export const authLogout = () => {
    console.log('auth logout')
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    return {
        type : AUTH_LOGOUT
    }
}

export const checkAuthTimeout = (expirationDate) => {
    return setTimeout(
        () => {
            authLogout()
        },
        expirationDate * 1000
    )
}


const makeRequest = (data,path) => {
    return () => {
    authStart();
    axios.post(`http://127.0.0.1:8000/rest-auth/${path}/`,data)
    .then((response) => {
        const token = response.data.key;
        const expirationDate = new Date(new Date().getTime() + 3600 *1000);
        localStorage.setItem('token',token);
        localStorage.setItem('expirationDate',expirationDate);
        checkAuthTimeout(3600)
        authSuccess(token);
    })
    .catch((error) => {
        authFail(error);
    })
    }
}


export const authLogin = (username,password) => {
    console.log('auth login')
    const data = {
        username : username,
        password : password
    }
    const path = 'login'
    return makeRequest(data,path)
} 

export const authSignup = (username,email,password1,password2) => {
    console.log('auth signup')
    const data = {
        username : username,
        email : email,
        password1 : password1,
        password2 : password2
    }
    const path = 'registration'
    return makeRequest(data,path);
}


export const authCheckState =  (dispatch) => {
    console.log('auth check state working');
    const token = localStorage.getItem('token');
    console.log('token is : ',token)
    if(token === undefined){
        console.log('auth logout from check state')
        localStorage.removeItem('token');
        localStorage.removeItem('expirationDate');
        return {
            type : AUTH_LOGOUT
        }
        // authLogout();
    } else {
        const expirationDate = new Date(localStorage.getItem('expirationDate'));
        console.log(expirationDate)
        if(expirationDate <= new Date()){
            console.log('auth logout from check state because expiration gone')
            localStorage.removeItem('token');
            localStorage.removeItem('expirationDate');
            return {
                type : AUTH_LOGOUT
            }
            // authLogout()
        } else {
            const remainingTime = (expirationDate.getTime() - new Date().getTime())/1000
            checkAuthTimeout(remainingTime);
            return {
                type : AUTH_SUCCESS,
                token : token
            }
            // authSuccess(token);
        }
    }
}
