import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import Axios from 'axios';

const ENDPOINT = 'https://backend-keeper-app.herokuapp.com/';

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    // event.preventDefault();
    Axios.post(`${ENDPOINT}/send`,({title:note.title,content:note.content}))
    setNote({
      title: "",
      content: "",
    });
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div className="create-form">
      <form  className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
          <Zoom in={isExpanded} type="submit" >
            <Fab onClick={submitNote}>
              <AddIcon />
            </Fab>
          </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
