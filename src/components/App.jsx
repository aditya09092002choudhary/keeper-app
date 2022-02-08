import React, { useState,useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import './App.css'

function App() {
  let initNote;
  if (localStorage.getItem("notes") === null) {
    initNote = [];
  } else {
    initNote = JSON.parse(localStorage.getItem("notes"));
  }
  const [notes, setNotes] = useState(initNote);
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function addNote(newNote) {
    if (newNote.title && newNote.content !== "") {
      setNotes((prevNotes) => {
        return [...prevNotes, newNote];
      });
    } else {
      window.alert("Title or content cannot be empty !");
    }
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
    
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />

      <div className="notes">
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
          );
        })}
        </div>
        
      <Footer />
    </div>
  );
}

export default App;
