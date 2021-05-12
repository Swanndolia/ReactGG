import React, { useState, useEffect } from "react";
import axios from "axios";

function Profile() {
  const user = useState(JSON.parse(localStorage.getItem("user")));
  const region = useState(localStorage.getItem("region"));
  const [league, setLeague] = useState("");

  useEffect(() => {
    axios
      .get(
        "http://localhost:8080/api/users/getUserLeague/" +
          region[0] +
          "/" +
          user[0].id
      )
      .then((response) => {
        localStorage.setItem("league", JSON.stringify(response.data));
        setLeague(JSON.parse(localStorage.getItem("league")));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])

  return (
    <div id="profile-container">
      <h2>Profile</h2>
      <h3>{JSON.stringify(user[0])}</h3>
      <h3>{JSON.stringify(league[0])}</h3>
    </div>
  );
}

export { Profile };
