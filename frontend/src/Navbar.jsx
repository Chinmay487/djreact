import React,{useEffect,useState} from 'react';
import {NavLink} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {authLogout} from './store/action/auth'


const Navbar = (props) => {

    const dispatch = useDispatch()
    
    const [authStatus,setAuthStatus] = useState()

    useEffect(()=>{
        setAuthStatus(props.authState !== null)
    },[props.authState])

    // console.log('authState is : ',props.authState !== null)

    // const isAuthenticated = authStatus 
    // console.log(authStatus)

    const logoutLink = <button onClick={()=>{dispatch(authLogout())}} >Logout</button>

    const loginLinks = <>
            <li>
                <NavLink exact to='/login'>Login</NavLink>
            </li>
            <li>
                <NavLink exact to='/signup'>Signup</NavLink>
            </li>
         </>


    return (
        <ul>
            <li>
                <NavLink exact to='/'>Home</NavLink>
            </li>
            {
                authStatus? logoutLink : loginLinks
            }
        </ul>
    )
}

export default Navbar;