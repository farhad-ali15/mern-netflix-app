import React from "react";
import "./home.css";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import { userData } from "../../dummydata";
import WidgetSmall from "../../components/widgetSmall/WidgetSmall";
import WidgetLarge from "../../components/widgetLarge/WidgetLarge";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

function Home() {
  const months = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  const [userStats, setUserStats] = useState([]);
  const getUserStats = async () => {
    try {
      await axios
        .get(`http://localhost:8800/api/users/monthly/stats`)
        .then((res) => {
          const statsList = res.data.sort(function (a, b) {
            return a._id - b._id;
          });
          statsList.map((item) =>
            setUserStats((prev) => [
              ...prev,
              { name: months[item._id - 1], "New Users": item.total },
            ])
          );
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserStats();
  }, [months]);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart title="User Analytics" grid data={userStats} dataKey="New Users" />
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
}

export default Home;
