import "./Header.scss";
import axios from "axios";

function getUserData(event, rg, user) {
  if (event.charCode === 13) {
    axios
      .get("http://localhost:8080/api/users/getUser/" + rg + "/" + user)
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
      });
  }
}
function setRegion(e){
  e.stopPropagation(); 
  localStorage.setItem("region", e.target.textContent);
}
function Header() {
  return (
    <div className="Header">
      <h1>React.gg</h1>
      <span>
        <input
          placeholder="Search a summoner..."
          onKeyPress={(evt) => getUserData(evt, "euw1", evt.target.value)}
        ></input>
        <div className="dropdown">
          <span>{localStorage.getItem("region")}</span>
          <div className="dropdown-content">
            <p onClick={(e) => {setRegion(e)}}>NA</p>
            <p onClick={(e) => {setRegion(e)}}>EUW</p>
            <p onClick={(e) => {setRegion(e)}}>EUNE</p>
          </div>
        </div>
      </span>
    </div>
  );
}

export default Header;
