import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Profile.scss";

function Profile() {
  const user = useState(JSON.parse(localStorage.getItem("user")));
  const region = useState(localStorage.getItem("region"));
  const [league, setLeague] = useState("");

  const [userData, regionData, leagueData] = [user[0], region[0], league[0]];

  useEffect(() => {
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
  }, [userData.id, regionData]);

  const renderAfterDataLoaded = function () {
    if (leagueData !== undefined) {
      return (
        <figure id="profile">
          <figcaption>
            <span>{"Wins: " + leagueData.wins}</span>
            <span>{"Loss: " + leagueData.losses}</span>
          </figcaption>
          <img
            alt={leagueData.tier + leagueData.rank}
            src={"leagues/" + leagueData.tier + leagueData.rank + ".webp"}
          />
          <figcaption>
            <span>{leagueData.tier + " " + leagueData.rank}</span>
            {leagueData.leaguePoints + " LP"}
          </figcaption>
        </figure>
      );
    }
  };

  return (
    <div id="profile-container">
      <h2 id="profile-username">{userData.name}</h2>
      {renderAfterDataLoaded()}
      <br />
      <h3>{JSON.stringify(userData)}</h3>
    </div>
  );
}

export { Profile };
