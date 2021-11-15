import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const UpdateArticleForm = (props) => {

    const history = useHistory()

    const [formData,setFormData] = useState({
        title : '',
        content : ''
    })

    const onInputChange = (event) => {
        const {name,value} = event.target
        setFormData((oldValue)=>{
            return {
                ...oldValue,
                [name] : value
            }
        })
    }

    

    const onFormSubmit = () => {
        axios.post(`http://127.0.0.1:8000/api/update/${props.id}`,{
            title : formData.title,
            content : formData.content
        })
        .then((response)=>response.data)
        history.push(`/detail/${props.id}`)
    }

    const onDeleteButton = () => {
        axios.get(`http://127.0.0.1:8000/api/delete/${props.id}`)
        .then((response)=>response.data)
        history.push('/')
    }


    return (
        <>
            <button onClick={onDeleteButton}>delete</button>
            <form onSubmit={onFormSubmit}>
            <label htmlFor="">
                title : 
                <input 
                    type="text" 
                    name="title" 
                    id="" 
                    value = {formData.title}
                    onChange={onInputChange}
                />
            </label>
            <label htmlFor="">
                content : 
                <textarea 
                    name="content" 
                    id="" 
                    cols="30" 
                    rows="10"
                    value={formData.content}
                    onChange={onInputChange}
                ></textarea>
            </label>
            <button type="submit">Update</button>
        </form>
        </>
    );

}


export default UpdateArticleForm;