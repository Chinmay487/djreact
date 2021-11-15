import React,{useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import UpdateArticleForm from './UpdateArticleForm';


const ArticleDetail = () => {

    const articleId = useParams()
    console.log(articleId.id)

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
            <h1>{articleData.title}</h1>
            <p>{articleData.content}</p>
            <h3>update</h3>
            <UpdateArticleForm id={articleId.id}/>
        </>
    );
}

export default ArticleDetail;