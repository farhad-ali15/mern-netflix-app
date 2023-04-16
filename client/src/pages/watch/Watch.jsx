import { ArrowBack } from "@mui/icons-material";
import "./Watch.scss";
import ReactPlayer from "react-player/youtube";
import { Link, useLocation } from "react-router-dom";

function Watch() {
  const location = useLocation();

  const movie = location.state.some;
  return (
    <div className="watch">
      <Link to="/">
        {" "}
        <div className="back">
          <ArrowBack />
          Home
        </div>
      </Link>
      {/* <video
        className="video"
        autoPlay={true}
        loop
        controls
        progress
        type="video/mp4"
        src={movie.video}
      /> */}

      <ReactPlayer
        className="video"
        url={movie.video}
        playing
        controls
        loop
        width={"100%"}
        height={"100%"}
        progressInterval={"1000"}
      />
    </div>
  );
}

export default Watch;
