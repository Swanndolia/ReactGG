import React from "react";
import ReactDOM from "react-dom";

import SelectedTab from "./SelectedTab/SelectedTab";
import Header from "./Header/Header";
import LeftMenu from "./LeftMenu/LeftMenu";
import reportWebVitals from "./reportWebVitals";

const selectedTabElement = React.createRef();
let selectedTab = "";

function setSelectedTab(tab) {
  selectedTabElement.current.changeSelectedTab(tab);
}

let main = (
  <React.StrictMode>
    <Header setSelectedTab={setSelectedTab} />
    <main>
      <div id="left-menu-container">
        <LeftMenu setSelectedTab={setSelectedTab} />
      </div>
      <div id="selected-tab-container">
        <SelectedTab ref={selectedTabElement} selectedTab={selectedTab} />
      </div>
    </main>
  </React.StrictMode>
);

ReactDOM.render(main, document.getElementById("root"));

reportWebVitals(console.log);
