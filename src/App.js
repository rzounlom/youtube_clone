import "./App.scss";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import RecommendedVideos from "./components/RecommendedVideos/RecommendedVideos";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import { useState, useEffect } from "react";
import { youtube } from "./api/axios";

const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    try {
      const getVideos = async (searchTerm) => {
        const response = await youtube.get("/search", {
          params: {
            maxResults: 10,
            q: searchTerm,
          },
        });
        console.log(response);
        setVideos(response.data.items);
      };
      // getVideos();
    } catch (error) {}
  }, [videos]);
  return (
    // <div className="app">
    //   <Header />
    //   <div className="app__page">
    //     <Sidebar />
    //     <RecommendedVideos />
    //   </div>
    // </div>
    <HomeScreen />
  );
};

export default App;
