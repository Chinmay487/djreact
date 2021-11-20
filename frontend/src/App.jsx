import React,{useEffect} from 'react';
import AppRoutes from './AppRoutes';
import {useDispatch,useSelector} from 'react-redux';
import {authCheckState} from './store/action/auth';



const App = () => {

    const dispatch = useDispatch();

    const username = useSelector((state)=>{
        return state.authReducer.username
    })

    useEffect(()=>{
        dispatch(authCheckState())
    },[dispatch]);

    console.log(username)

    return (
        <>
            <AppRoutes/>
        </>
    )
}

export default App;