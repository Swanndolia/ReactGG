import React, { useState, useEffect } from "react";
import axios from "axios";

function Profile() {
  const user = useState(JSON.parse(localStorage.getItem("user")));
  const region = useState(localStorage.getItem("region"));
  const [league, setLeague] = useState("");

  const [userData, regionData, leagueData] = [user[0], region[0], league[0]]

  useEffect(() => {
    console.log(userData.id)
    axios
      .get(
        "http://localhost:8080/api/users/getUserLeague/" +
          regionData +
          "/" +
          userData.id
      )
      .then((response) => {
        localStorage.setItem("league", JSON.stringify(response.data));
        setLeague(JSON.parse(localStorage.getItem("league")));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userData, regionData]);
  return (
    <div id="profile-container">
      <h2>Profile</h2>
      <h3>{JSON.stringify(userData)}</h3>
      <br />
      <h3>{JSON.stringify(leagueData)}</h3>
    </div>
  );
}

export { Profile };
