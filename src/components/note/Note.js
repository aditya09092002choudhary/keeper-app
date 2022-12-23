import axios from 'axios';
import './note.css';
import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

// const urlPath = "http://localhost:3001/"
const urlPath = "https://keeper-app-backend.onrender.com/";
const Note = () => {
    const {id}=useParams();
    // console.log(id);
    const [data,setData]=useState({});
    const [flag, setflag] = useState(false);
    useEffect(()=>{
        axios.get(urlPath+"note/"+id).then((res)=>{
            setData(res.data);
            if(res.data!=""){
                setflag(true);
            }
        })
    },[])
    return (
        <div className='note-container'>
            <div className="note">
                <h1>Note</h1>
                {(flag!=false)?<div className="note-body">
                    <div className="exit"><a href="/">❌</a></div>
                    <div className="title"><h1>{data.title}</h1></div>
                    <div className="date">published on <span>{data.date}</span></div>
                    <div className="content"><p>{data.content}</p></div>
                </div>:<div style={{textAlign:"center"}}><img src='https://sales.ufaber.com/public/static/img/loader-orange.gif' width={35} alt='loading'/></div>}
            </div>
        </div>
    );
}

export default Note;
