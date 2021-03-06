import React, { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Axios from "axios";

const ENDPOINT = "https://backend-keeper-app.herokuapp.com";

function Note(props) {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    Axios.get(`${ENDPOINT}/`).then((response) => {
      setNotes(response.data);
    });
  }, []);
  console.log(notes);

  function handleClick(event) {
    event.preventDefault();
    Axios.post(`${ENDPOINT}/delete`, { id: event.target.value });
    setTimeout(() => {
      window.location.reload();
    }, 700);
  }

  return notes.map((note, i) => {
    return (
      <div key={i} className="note">
        <h1>{note.title}</h1>
        <p>{note.content}</p>
        <form>
          {note._id !== "-1" ? (
            <div >
              <DeleteIcon />
              <button className="btn" value={`${note._id}`} onClick={handleClick}></button>
            </div>
          ) : null}
        </form>
      </div>
    );
  });
}

export default Note;
