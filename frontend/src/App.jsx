// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Header from "./components/Header/Header";
import VideoPage from "./components/VideoPage/VideoPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import axios from "axios";
import SearchBar from "./components/SearchBar/Searchbar";

function App() {
  async function getCommentsForVideo() {
    let response = await axios.get(
      "http://127.0.0.1:8000/api/comments/video/aaa/"
    );
    console.log(`COMMENTS:`, response.data);
  }

  async function createComment() {
    let response = await axios.post("http://127.0.0.1:8000/api/comments/");
    console.log(response.data);
  }

  async function updateComment() {
    let response = await axios.put("http://127.0.0.1:8000/api/comments/1/");
    console.log(response.data);
  }

  async function getRepliesOnComment() {
    let response = await axios.get(
      "http://127.0.0.1:8000/api/comments/1/replies/"
    );
    console.log(response.data);
  }
  async function createReply() {
    let response = await axios.post(
      "http://127.0.0.1:8000/api/comments/1/replies/"
    );
    console.log(response.data);
  }
  return (
    <div id="body">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/header" element={<Header />} />
        <Route path="/video/:videoId" element={<VideoPage/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
