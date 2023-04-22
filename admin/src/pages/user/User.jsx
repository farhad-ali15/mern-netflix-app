import {
  AdminPanelSettingsOutlined,
  MailOutline,
  PermIdentity,
  Publish,
} from "@mui/icons-material";
import "./user.css";
import React from "react";
import { Link, useLocation } from "react-router-dom";

function User() {
  const location = useLocation();
  const user = location.state.some;

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/add-user">
          <button className="userAddButton">Create</button>
        </Link>
      </div>

      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src={user.profilePic} alt="" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{user.userName}</span>
              <span className="userShowUserTitle">{user.email}</span>
            </div>
          </div>
          <div className="userShoewBottom">
            <span className="userShowTitle">Acount Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{user.userName}</span>
            </div>

            <span className="userShowTitle">Admin Status Details</span>
            <div className="userShowInfo">
              <AdminPanelSettingsOutlined className="userShowIcon" />
              <span className="userShowInfoTitle">
                {user.isAdmin ? "Admin" : "Not an Admin"}
              </span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{user.email}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder={user.userName}
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder={user.email}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Password</label>
                <input type="password" className="userUpdateInput" />
              </div>

              <div className="userUpdateItem">
                <label>Admin Status</label>
                <input
                  type="text"
                  placeholder="false"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img src={user.profilePic} alt="" className="userUpdateImg" />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default User;
