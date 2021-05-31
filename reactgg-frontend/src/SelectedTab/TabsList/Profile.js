import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Profile.scss";

function GetData(props) {
  useEffect(() => {
    axios
      .get(
        "http://localhost:8080/api/users/getUserLeague/" +
          props.regionData +
          "/" +
          props.userData.id
      )
      .then((response) => {
        if (response.data.length === 0) {
          localStorage.setItem(
            "league",
            JSON.stringify({
              summonerName: JSON.parse(localStorage.getItem("user")).name,
              undefined: true,
            })
          );
        } else {
          localStorage.setItem("league", JSON.stringify(response.data));
        }
        props.setLeague(JSON.parse(localStorage.getItem("league")));
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(
        "http://localhost:8080/api/users/getUserHistory/" +
          localStorage.getItem("wregion") +
          "/" +
          props.userData.puuid
      )
      .then((response) => {
        localStorage.setItem("history", JSON.stringify(response.data));
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return null;
}

function Profile() {
  const user = useState(JSON.parse(localStorage.getItem("user")));
  const region = useState(localStorage.getItem("region"));
  const [league, setLeague] = useState("");

  let [userData, regionData, leagueData] = [user[0], region[0], league[0]];

  const renderAfterDataLoaded = function () {
    if (
      (!localStorage.getItem("league") && leagueData == null) ||
      JSON.parse(localStorage.getItem("league")).summonerName !==
        JSON.parse(localStorage.getItem("user")).name
    ) {
      return (
        <GetData
          setLeague={setLeague}
          userData={userData}
          regionData={regionData}
        />
      );
    }
    leagueData = JSON.parse(localStorage.getItem("league"));
    console.log(leagueData);
    if (leagueData.undefined === true) {
      console.log(true);
      return (
        <div>
          <figure id="profile">
            <figcaption>
              <span>{"Wins: undefined"}</span>
              <span>{"Loss: undefined"}</span>
            </figcaption>
            <img alt={"undefined"} src={"leagues/undefined.webp"} />
            <figcaption>
              <span>{"Undefined"}</span>
              {"Undefined LP"}
            </figcaption>
          </figure>
          <h3>
            World region:{" "}
            <span style={{ color: "red" }}>
              {localStorage.getItem("wregion")}
            </span>
          </h3>
          <br />
          <h3>
            Local region:{" "}
            <span style={{ color: "red" }}>
              {localStorage.getItem("region")}
            </span>
          </h3>
          <br />
          <h3>
            Account ID:{" "}
            <span style={{ color: "red" }}>{userData.accountId}</span>
          </h3>
          <br />
          <h3>
            User ID: <span style={{ color: "red" }}>{userData.id}</span>
          </h3>
          <br />
          <h3>
            Name: <span style={{ color: "red" }}>{userData.name}</span>
          </h3>
          <br />
          <h3>
            Profile icon ID:{" "}
            <span style={{ color: "red" }}>{userData.profileIconId}</span>
          </h3>
          <br />
          <h3>
            PUUID: <span style={{ color: "red" }}>{userData.puuid}</span>
          </h3>
          <br />
          <h3>
            Revision date:{" "}
            <span style={{ color: "red" }}>{userData.revisionDate}</span>
          </h3>
          <br />
          <h3>
            Summoner level:{" "}
            <span style={{ color: "red" }}>{userData.summonerLevel}</span>
          </h3>
          <br />
          <h3>
            Match history:{" "}
            <span style={{ color: "red" }}>
              {localStorage.getItem("history")}
            </span>
          </h3>
        </div>
      ); //WHY IT DONT GO INSIDE THE ELSE AND DONT GO INSIDE THE IN
    } else {
      console.log(false);
      return (
        <div>
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
          <h3>
            World region:{" "}
            <span style={{ color: "red" }}>
              {localStorage.getItem("wregion")}
            </span>
          </h3>
          <br />
          <h3>
            Local region:{" "}
            <span style={{ color: "red" }}>
              {localStorage.getItem("region")}
            </span>
          </h3>
          <br />
          <h3>
            Account ID:{" "}
            <span style={{ color: "red" }}>{userData.accountId}</span>
          </h3>
          <br />
          <h3>
            User ID: <span style={{ color: "red" }}>{userData.id}</span>
          </h3>
          <br />
          <h3>
            Name: <span style={{ color: "red" }}>{userData.name}</span>
          </h3>
          <br />
          <h3>
            Profile icon ID:{" "}
            <span style={{ color: "red" }}>{userData.profileIconId}</span>
          </h3>
          <br />
          <h3>
            PUUID: <span style={{ color: "red" }}>{userData.puuid}</span>
          </h3>
          <br />
          <h3>
            Revision date:{" "}
            <span style={{ color: "red" }}>{userData.revisionDate}</span>
          </h3>
          <br />
          <h3>
            Summoner level:{" "}
            <span style={{ color: "red" }}>{userData.summonerLevel}</span>
          </h3>
          <br />
          <h3>
            Fresh blood ?{" "}
            <span style={{ color: "red" }}>
              {leagueData.freshBlood.toString()}
            </span>
          </h3>
          <br />
          <h3>
            Hot streak ?{" "}
            <span style={{ color: "red" }}>
              {leagueData.hotStreak.toString()}
            </span>
          </h3>
          <br />
          <h3>
            Inactive ?{" "}
            <span style={{ color: "red" }}>
              {leagueData.inactive.toString()}
            </span>
          </h3>
          <br />
          <h3>
            League ID:{" "}
            <span style={{ color: "red" }}>{leagueData.leagueId}</span>
          </h3>
          <br />
          <h3>
            League points:{" "}
            <span style={{ color: "red" }}>{leagueData.leaguePoints}</span>
          </h3>
          <br />
          <h3>
            Losses: <span style={{ color: "red" }}>{leagueData.losses}</span>
          </h3>
          <br />
          <h3>
            queue Type:{" "}
            <span style={{ color: "red" }}>{leagueData.queueType}</span>
          </h3>
          <br />
          <h3>
            Rank: <span style={{ color: "red" }}>{leagueData.rank}</span>
          </h3>
          <br />
          <h3>
            Summoner ID:{" "}
            <span style={{ color: "red" }}>{leagueData.summonerId}</span>
          </h3>
          <br />
          <h3>
            Summoner name:{" "}
            <span style={{ color: "red" }}>{leagueData.summonerName}</span>
          </h3>
          <br />
          <h3>
            Tier: <span style={{ color: "red" }}>{leagueData.tier}</span>
          </h3>
          <br />
          <h3>
            Veteran ?{" "}
            <span style={{ color: "red" }}>
              {leagueData.veteran.toString()}
            </span>
          </h3>
          <br />
          <h3>
            Wins: <span style={{ color: "red" }}>{leagueData.wins}</span>
          </h3>
          <br />
          <h3>
            Match history:{" "}
            <span style={{ color: "red" }}>
              {localStorage.getItem("history")}
            </span>
          </h3>
        </div>
      );
    }
  };

  return (
    <div id="profile-container">
      <h2 id="profile-username">{userData.name}</h2>
      {renderAfterDataLoaded()}
    </div>
  );
}

export { Profile };
