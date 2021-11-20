import React,{useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import UpdateArticleForm from './UpdateArticleForm';
import {useSelector} from 'react-redux';
import Navbar from './Navbar';

const ArticleDetail = () => {

    const articleId = useParams()

    const authState = useSelector((state)=>{
        return state.authReducer.token;
    });


    const [articleData,setArticleData] = useState({
        title : '',
        content : ''
    });

    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/details/${articleId.id}`)
        .then((response) => response.data)
        .then((data)=>{
            setArticleData((oldValue)=>{
                return {
                    ...oldValue,
                    ...data
                }
            })
        })
    },[articleId.id]);

    return (
        <>
            <Navbar/>
            <h1>{articleData.title}</h1>
            <p>{articleData.content}</p>
            {
                authState !== null? 
                <UpdateArticleForm id={articleId.id}/> 
                : 
                <h1>Login to update article</h1>
            }
            
        </>
    );
}

export default ArticleDetail;