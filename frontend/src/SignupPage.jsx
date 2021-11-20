import React,{useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {authSignup} from './store/action/auth';
import {useHistory} from 'react-router-dom';
import Navbar from './Navbar';

const SignupPage = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const errorMessage = useSelector((state) => {
        return state.authReducer.error;
    });


    const [formData,setFormData] = useState({
        username : '',
        email : '',
        password1 : '',
        password2 : ''
    });

    const onInputChange = (event) => {
        const {name,value} = event.target;

        setFormData((oldValue) => {
            return {
                ...oldValue,
                [name] : value
            }
        });
    }

    const onFormSubmit = (event) => {
        event.preventDefault()
        const {username,email,password1,password2} = formData
        dispatch(authSignup(username,email,password1,password2))
        history.push('/')
    }

    return (
       <>   
            <Navbar/>
             <form onSubmit={onFormSubmit}>
            <p>{errorMessage}</p>
            <label htmlFor="">
                username : 
                <input 
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={onInputChange}
                    required
                    autoComplete="off" 
                />
            </label>
            <label htmlFor="">
                email : 
                <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={onInputChange}
                    required
                    autoComplete="off" 
                />
            </label>
            <label htmlFor="">
                password : 
                <input 
                    type="password"
                    name="password1"
                    value={formData.password1}
                    onChange={onInputChange}
                    required
                    autoComplete="off" 
                />
            </label>
            <label htmlFor="">
                Confirm Password : 
                <input 
                    type="text"
                    name="password2"
                    value={formData.password2}
                    onChange={onInputChange}
                    required
                    autoComplete="off" 
                />
            </label>
            <button type="submit">Signup</button>
        </form>
       </>
    );
}

export default SignupPage