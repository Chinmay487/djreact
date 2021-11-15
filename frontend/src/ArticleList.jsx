import React,{useState,useEffect,useCallback} from 'react';
import NewArticleForm from './NewArticleForm';
import axios from 'axios';
import {Link} from 'react-router-dom'

const ArticleList = () => {

    let id = 100;

    const [articleList,setArticleList] = useState([]);

    const fetchArticles = useCallback(() => {
        axios.get('http://127.0.0.1:8000/api/')
        .then((response) => response.data)
        .then((data)=>{
            setArticleList(data)
        })
    },[]);

    useEffect(()=>{
        fetchArticles()
    },[fetchArticles]);

    return (
        <>
            <h1>Article List View</h1>
            {
                articleList.map((article)=>{
                    return (
                        <div key={id++}>
                        <h3>
                            <Link to={`detail/${article.id}`}>{article.title}</Link>
                        </h3>
                        <h5>{article.content}</h5>
                    </div>
                    );
                })
            }
            <NewArticleForm/>
        </>
    );
}

export default ArticleList;