import "./Header.scss";
import axios from "axios";

function getUserData(event, rg, user, setSelectedTab) {
  if (event.charCode === 13) {
    axios
      .get("http://localhost:8080/api/users/getUser/" + rg + "/" + user)
      .then((response) => {
        if (response) {
          localStorage.setItem("user", JSON.stringify(response.data));
          setSelectedTab("Profile");
        }
      })
      .catch((error) => {
        if (error === "ENOTFOUND") {
          alert(
            "User not found, pease check the spelling and the region selected"
          );
        }
        console.log(error);
      });
  }
}
function setRegion(e) {
  e.stopPropagation();
  document.getElementById("region-selector").textContent = e.target.textContent;
  localStorage.setItem("region", e.target.textContent);
  if (e.target.textContent === ("NA" || "BR" || "LAN" || "LAS" || "OCE")) {
    localStorage.setItem("wregion", "americas");
  } else if (e.target.textContent === ("KR" || "JP")) {
    localStorage.setItem("wregion", "asia");
  } else {
    localStorage.setItem("wregion", "europe");
  }
}

function Header({ setSelectedTab }) {
  return (
    <div className="Header">
      <h1>React.gg</h1>
      <span>
        <input
          id="user-search-input"
          placeholder="Search a summoner..."
          onKeyPress={(evt) =>
            getUserData(
              evt,
              localStorage.getItem("region"),
              evt.target.value,
              setSelectedTab
            )
          }
        ></input>
        <div className="dropdown">
          <span id="region-selector">
            {localStorage.getItem("region") !== null
              ? localStorage.getItem("region")
              : "NA"}
          </span>
          <div className="dropdown-content">
            <p
              onClick={(e) => {
                setRegion(e);
              }}
            >
              NA
            </p>
            <p
              onClick={(e) => {
                setRegion(e);
              }}
            >
              EUW
            </p>
            <p
              onClick={(e) => {
                setRegion(e);
              }}
            >
              EUNE
            </p>
          </div>
        </div>
      </span>
    </div>
  );
}

export default Header;
