import { useEffect, useState } from "react";
import { YOUTUBE_POPULAR_VIDEOS } from "../utils/constants";
import {Link} from "react-router-dom"
import VideoCard, {adVideoCard} from "./VideoCard"

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const response = await fetch(YOUTUBE_POPULAR_VIDEOS);
    const data = await response.json();
    setVideos(data.items);
  };

  const AdvertisedCard = adVideoCard(VideoCard)

  return (
    <div className="flex flex-wrap">
     {videos[0] && <AdvertisedCard info={videos[0]}/>}
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}><VideoCard key={video.id} info={video} /></Link>
      ))}
    </div>
  );
};
export default VideoContainer;
