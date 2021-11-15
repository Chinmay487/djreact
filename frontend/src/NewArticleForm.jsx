import React,{useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';


const NewArticleForm = () => {

    const [formData,setFormData] = useState({
        title : '',
        content : ''
    });

    const history = useHistory()

    const onInputChange = (event) => {
        const {name,value} = event.target
        setFormData((oldValue) => {
            return {
                ...oldValue,
                [name] : value
            }
        });
    }

    const onFormSubmit = (event) => {
        axios.post('http://127.0.0.1:8000/api/add',{
            title : formData.title,
            content : formData.content
        })
        .then((respose)=>respose.data)
        history.push('/')
    }

    return (
        <form onSubmit={onFormSubmit}>
            <h3>Add new Article</h3>
            <label htmlFor="">
                Title : 
                <input 
                    type="text" 
                    name="title" 
                    id=""
                    value = {formData.title}
                    onChange = {onInputChange}
                    required
                    autoComplete="off"
                />
            </label>
            <br />
            <br />
            <label htmlFor="">
                Content : 
                <textarea 
                    name="content" 
                    id="" 
                    cols="30" 
                    rows="10"
                    value = {FormData.content}
                    onChange={onInputChange}
                    required
                    autoComplete="off"
                ></textarea>
            </label>
            <br />
            <br />
            <button type="submit">Add</button>
        </form>
    );
}

export default NewArticleForm;