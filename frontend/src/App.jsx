// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import axios from "axios";





function App() {


  async function getCommentsForVideo(){
    let response = await axios.get('http://127.0.0.1:8000/api/comments/video/aaa/');
      console.log(`COMMENTS:`,response.data)
    }

  async function createComment(){
    let response = await axios.post('http://127.0.0.1:8000/api/comments/');
    console.log(response.data)
  }

  async function updateComment(){
    let response = await axios.put('http://127.0.0.1:8000/api/comments/1/')
  }
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
