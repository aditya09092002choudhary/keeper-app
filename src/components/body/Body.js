import React, { useEffect, useState } from 'react';
import './body.css';
import axios from 'axios';
const urlPath="http://localhost:3001/"
const Body = () => {
    const [title,setTitle]=useState("");
    const [content,setContent] = useState("");
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get(urlPath).then((res)=>{
            console.log(res);
            setData(res.data);
        })
    },[]);
    function handleClick(){
        if(title.trim().length!=0 && title.trim().length!=0){
            console.log(title,content);
            axios.post(urlPath+"savenote",{title,content}).then((res)=>{
                console.log(res.data);
            })
        }
    }
    return (
        <div className='body-container'>
            <div className="addNotes">
                <div className="add-container">
                    <div className="title">
                        <input type="text" name='title' placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)}  className="title" id="title" />
                    </div>
                    <div className="content">
                        <input type="text" name='content' placeholder='Take a note...' value={content} onChange={(e)=>setContent(e.target.value)} className="content" id="content" />
                    </div>
                    <div className="button" onClick={handleClick}>
                        <span>+</span>
                    </div>
                </div>
            </div>
            <div className="notes-container">
                <h1>All Notes</h1>
                <div className="allNotes">
                    {data.map((note,i)=>{
                        return <div className="note" key={i}>
                        <div className="title">
                            <h2>{note.title.substr(0,15)+"..."}</h2>
                        </div>
                        <div className="content">
                            <p>{note.content.substr(0,30)+"..."}</p>
                        </div>
                    </div>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Body;
