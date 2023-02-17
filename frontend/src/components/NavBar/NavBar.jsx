import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>YOUTUBE CLONE</b>
          </Link>
        </li>
        <li>
          <input type="search-bar" />
          <a href="https://www.googleapis.com/youtube/v3/search?q={SEARCH QUERY HERE}&key={AIzaSyCj6vGRSUeWVDU1M19WLA2M6giN2hjWiVM} "> ?</a>
        </li>
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
