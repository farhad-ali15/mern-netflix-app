import "./ListItem.scss";

import {
  Add,
  PlayCircleFilledWhiteOutlined,
  ThumbDownAlt,
  ThumbUpAlt,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  const getMovie = async () => {
    try {
      await axios
        .get(`http://localhost:8800/api/movies/${item}`)
        .then((res) => {
          setMovie(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovie();
  }, [item]);

  return (
    <Link to="/watch" state={{ some: movie }}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie?.img} alt="" />
        {isHovered && (
          <>
            <ReactPlayer
              url={movie.trailer}
              playing
              controls
              loop
              width={"640"}
              height={"320"}
              progressInterval={"1000"}
            />

            <div className="itemInfo">
              <div className="icons">
                <PlayCircleFilledWhiteOutlined className="icon" />
                <Add className="icon" />
                <ThumbUpAlt className="icon" />
                <ThumbDownAlt className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className="limit">+{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}

export default ListItem;
