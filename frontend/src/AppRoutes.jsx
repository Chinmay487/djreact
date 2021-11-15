import React from 'react';
import {Switch,Route} from 'react-router-dom';
import ArticleList from './ArticleList';
import ArticleDetail from './ArticleDetail';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';


const AppRoutes = () => {
    return (
        <Switch>
            <Route exact path='/signup' component={SignupPage}/>
            <Route exact path='/login' component={LoginPage}/>
            <Route exact path='/detail/:id' component={ArticleDetail}/>
            <Route exact path='/' component={ArticleList}/>
        </Switch>
    );
}


export default AppRoutes;