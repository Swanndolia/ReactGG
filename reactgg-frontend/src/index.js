import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import SelectedTab from "./SelectedTab/SelectedTab";
import Header from "./Header/Header";
import LeftMenu from "./LeftMenu/LeftMenu";
import reportWebVitals from "./reportWebVitals";

export

function setSelectedTab(tab) {
  ReactDOM.render(
    <SelectedTab selectedTab={tab} />,
    document.getElementById("selected-tab-container")
  );
  return tab;
}

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <main>
      <div id="left-menu-container">
        <LeftMenu setSelectedTab={setSelectedTab} />
      </div>
      <div id="selected-tab-container">
        <SelectedTab selectedTab={""} />
      </div>
    </main>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
