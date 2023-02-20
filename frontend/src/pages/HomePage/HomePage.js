import React from "react";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";
import SearchBar from "../../components/SearchBar/Searchbar";
import VideoLink from "../../components/VideoLink/VideoLink";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const { user, config } = useAuth();
  const [videos, setVideos] = useState([]);


    const fetchVideos = async (query) => {
      try {
        let response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?q=${query}&key=AIzaSyCj6vGRSUeWVDU1M19WLA2M6giN2hjWiVM&maxResults=15&part=snippet&type=video`
        );
        setVideos(response.data.items);
        console.log(response.data.items)
      } catch (error) {
        console.log(error.response.data);
      }
    };

    const videoLinks = videos.map((video)=> <VideoLink video={video}/>)
    
  return (
    <div className="container">
      <SearchBar fetchVideos={fetchVideos} setQuery={setVideos} />
      {videoLinks} 

    </div>
  );
};

export default HomePage;
