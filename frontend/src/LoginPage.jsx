import React,{useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {authLogin} from './store/action/auth';
import {useHistory} from 'react-router-dom'

const LoginPage = () => {

    const dispatch = useDispatch()
    const errorMessage = useSelector((state) => {
        return state.authReducer.error;
    });

    console.log(errorMessage)

    const history = useHistory()

    const [formData,setFormData] = useState({
        username : '',
        password : ''
    });


    const onInputChange = (event) => {
        const {name,value} = event.target
        setFormData((oldValue)=>{
            return {
                ...oldValue,
                [name] : value
            }
        });
    }


    const onFormSubmit = (event) => {
        event.preventDefault()
        const {username,password} = formData
        dispatch(authLogin(username,password));
        history.push('/');
    }

    return (
       <>
       <p>
           {errorMessage}
       </p>
        <form onSubmit={onFormSubmit}>
            <label htmlFor="">
                Username : 
                <input
                    type="text" 
                    name="username" 
                    value = {FormData.username}
                    onChange = {onInputChange}
                 />
            </label>
            <label htmlFor="">
                Password : 
                <input 
                    type="password" 
                    name="password" 
                    value = {formData.password}
                    onChange = {onInputChange}
                />
            </label>
            <button type="submit">Login</button>
        </form>
       </>
    );
}

export default LoginPage;