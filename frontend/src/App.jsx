import React,{useEffect} from 'react';
import Navbar from './Navbar';
import AppRoutes from './AppRoutes';
import {useDispatch,useSelector} from 'react-redux';
import {authCheckState} from './store/action/auth';



const App = () => {

    const dispatch = useDispatch();

    const authState = useSelector((state)=>{
        return state.authReducer.token;
    });

    useEffect(()=>{
        dispatch(authCheckState())
    },[dispatch]);


    // console.log('token is : ',localStorage.getItem('token'))

    return (
        <>
            <Navbar authState={authState} />
            <AppRoutes/>
        </>
    )
}

export default App;