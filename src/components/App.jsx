import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import './App.css';

function App() {

  return (
    <div >
      <Header />
      <CreateArea />

      <div className="notes">
      
        <Note />
        </div>
        
      <Footer />
    </div>
  );
}

export default App;
