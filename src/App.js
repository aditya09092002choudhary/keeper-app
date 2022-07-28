import Navbar from "./components/navbar/Navbar";
import './App.css';
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Note from "./components/note/Note";

const App = () => {
    return (<>
    <div className="container">
        <Navbar />
        <Router>
          <Routes>
            <Route path={'/'} element={<Body />} />
            <Route path={'/note/:id'} element={<Note />}/>
          </Routes>
        </Router>
        <Footer />
    </div>
    </>
  );
};

export default App;
// 53d78ef0fef34d6aa6d46f98bb962a69