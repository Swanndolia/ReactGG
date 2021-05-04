import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import SelectedTab from "./SelectedTab/SelectedTab";
import Header from "./Header/Header";
import LeftMenu from "./LeftMenu/LeftMenu";
import reportWebVitals from "./reportWebVitals";

let selectedTab = "";
function setSelectedTab(tab) {
  return tab;
}
ReactDOM.render(
  <React.StrictMode>
    <Header />
    <main>
      <LeftMenu setSelectedTab={setSelectedTab} />
      <SelectedTab selectedTab={setSelectedTab} />
    </main>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
