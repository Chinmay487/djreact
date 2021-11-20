import React ,{useState,useEffect}from 'react';
import {NavLink} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {authLogout} from './store/action/auth'


const Navbar = () => {

    const dispatch = useDispatch()

    const authState = useSelector((state)=>{
        return state.authReducer.token;
    });

    const [nav,setNav] = useState(<></>)

    // const getNavLinks = () => {
       
    // }

    useEffect(()=>{
        if(authState !== null){
            setNav(<button onClick={()=>{dispatch(authLogout())}} >Logout</button>)
    } else {
        setNav(
            <>
                <li>
                    <NavLink exact to='/login'>Login</NavLink>
                </li>
                <li>
                    <NavLink exact to='/signup'>Signup</NavLink>
                </li>
            </>
        );
    } 
    },[authState,dispatch])

    return (
        <ul>
            <li>
                <NavLink exact to='/'>Home</NavLink>
            </li>
            {
                nav
            }
        </ul>
    )
}

export default Navbar;