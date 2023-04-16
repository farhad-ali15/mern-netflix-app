/* eslint-disable react-hooks/exhaustive-deps */
import "./Home.scss";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Home({ type }) {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  const getRandomList = async () => {
    try {
      await axios
        .get(
          `http://localhost:8800/api/lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`
        )
        .then((res) => {
          setLists(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRandomList();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list) => (
        <List list={list} key={list._id} />
      ))}
      ;
    </div>
  );
}

export default Home;
