import { Visibility } from "@mui/icons-material";
import "./widgetSmall.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function WidgetSmall() {
  const [newUser, setNewUser] = useState([]);
  const getNewUser = async () => {
    try {
      await axios
        .get(`http://localhost:8800/api/users/?new=true`)
        .then((res) => setNewUser(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNewUser();
  }, []);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Newly Joined Members</span>
      <ul className="widgetSmList">
        {newUser.map((user) => (
          <li className="widgetSmallListItem" key={user._id}>
            <img
              src={
                user.profilePic ||
                "https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg"
              }
              alt=""
              className="widgetSmImage"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.userName}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WidgetSmall;
