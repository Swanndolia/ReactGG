import "./Header.scss";
import axios from "axios";

function getUserData(event, rg, user) {
  if (event.charCode === 13) {
    axios
      .get("http://localhost:8080/api/users/getUser/" + rg + "/" + user)
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
        console.log(JSON.parse(localStorage.getItem("user")));
      });
  }
}

function Header() {
  return (
    <div className="Header">
      <h1>React.gg</h1>
      <input
        onKeyPress={(evt) => getUserData(evt, "euw1", evt.target.value)}
      ></input>
    </div>
  );
}

export default Header;
