/* eslint-disable react-hooks/exhaustive-deps */
import "./Featured.scss";

import { InfoOutlined, PlayArrowRounded } from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "axios";

function Featured({ type }) {
  const [content, setContent] = useState({});

  const getMovie = async () => {
    try {
      await axios
        .get(`http://localhost:8800/api/movies/random?type=${type}`)
        .then((res) => {
          setContent(res.data[0]);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovie();
  }, [type]);
  console.log(content);
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="Adventure">Adventure</option>
            <option value="Comedy">Comedy</option>
            <option value="Crime">Crime</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Historical">Historical</option>
            <option value="Horror">Horror</option>
            <option value="Romance">Romance</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Thriller">Thriller</option>
            <option value="Western">Western</option>
            <option value="Animation">Animation</option>
            <option value="Drama">Drama</option>
            <option value="Documentary">Documentary</option>
          </select>
        </div>
      )}
      <img width="100%" src={content.img} alt="background" />
      <div className="info">
        <img src={content.imgTitle} alt="" />
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <button className="play">
            <PlayArrowRounded />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
