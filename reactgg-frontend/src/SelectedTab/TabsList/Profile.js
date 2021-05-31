import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Profile.scss";

function GetLeague(props) {
  useEffect(() => {
    axios
      .get(
        "http://localhost:8080/api/users/getUserLeague/" +
          props.regionData +
          "/" +
          props.userData.id
      )
      .then((response) => {
        localStorage.setItem("league", JSON.stringify(response.data));
        props.setLeague(JSON.parse(localStorage.getItem("league")));
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return null;
}

function Profile() {
  const user = useState(JSON.parse(localStorage.getItem("user")));
  const region = useState(localStorage.getItem("region"));
  const [league, setLeague] = useState("");

  let [userData, regionData, leagueData] = [user[0], region[0], league[0]];

  const renderAfterDataLoaded = function () {
    if (
      !JSON.parse(localStorage.getItem("league"))[0] || leagueData === undefined &&
      JSON.parse(localStorage.getItem("league"))[0].summonerName !==
        JSON.parse(localStorage.getItem("user")).name
    ) {
      return (
        <GetLeague
          setLeague={setLeague}
          userData={userData}
          regionData={regionData}
        />
      );
    } else {
      leagueData = JSON.parse(localStorage.getItem("league"))[0];
    }

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
