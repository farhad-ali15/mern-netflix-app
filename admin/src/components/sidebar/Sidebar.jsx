import React from "react";
import "./sidebar.css";
import {
  AssessmentOutlined,
  EmailOutlined,
  FeedbackOutlined,
  LineStyleOutlined,
  ListAltOutlined,
  ManageAccountsOutlined,
  MarkunreadOutlined,
  OutlinedFlagTwoTone,
  People,
  PlayCircle,
  TimelineOutlined,
  TrendingUp,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/home" className="link">
              <li className="sidebarListItem">
                <LineStyleOutlined className="sidebarIcons" />
                Home
              </li>
            </Link>

            <li className="sidebarListItem">
              <TimelineOutlined className="sidebarIcons" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcons" />
              Sales
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="users" className="link">
              <li className="sidebarListItem">
                <People className="sidebarIcons" />
                Users
              </li>
            </Link>
            <Link to="/movies" className="link">
              <li className="sidebarListItem">
                <PlayCircle className="sidebarIcons" />
                Movies
              </li>
            </Link>
            <Link className="link" to="/lists">
              <li className="sidebarListItem">
                <ListAltOutlined className="sidebarIcons" />
                Lists
              </li>
            </Link>
            <Link className="link" to="">
              <li className="sidebarListItem">
                <AssessmentOutlined className="sidebarIcons" />
                Reports
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notification</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <EmailOutlined className="sidebarIcons" />
              Mail
            </li>
            <li className="sidebarListItem">
              <FeedbackOutlined className="sidebarIcons" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <MarkunreadOutlined className="sidebarIcons" />
              Messages
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <ManageAccountsOutlined className="sidebarIcons" />
              Manage
            </li>
            <li className="sidebarListItem">
              <TimelineOutlined className="sidebarIcons" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <OutlinedFlagTwoTone className="sidebarIcons" />
              Rports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
