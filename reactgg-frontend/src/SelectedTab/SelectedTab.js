import React from "react";
import "./SelectedTab.scss";
import {
  Profile,
  LiveGame,
  Champions,
  Matchups,
  Skills,
  Statistics,
  Training,
  Settings,
  Contact,
} from "./TabsList/index.js";

class SelectedTab extends React.Component {
  state = {
    selectedTab: this.props.selectedTab,
  };
  changeSelectedTab(tab) {
    this.setState({ selectedTab: tab });
  }
  render() {
    if (JSON.parse(localStorage.getItem("user"))) {
      switch (this.state.selectedTab) {
        case "Profile":
          return (
            <div className="selected-tab">
              <Profile key={JSON.parse(localStorage.getItem("user")).name + localStorage.getItem("region")}/>
            </div>
          );
        case "Live Game":
          return (
            <div className="selected-tab">
              <LiveGame key={JSON.parse(localStorage.getItem("user")).name}/>
            </div>
          );
        case "Champions":
          return (
            <div className="selected-tab">
              <Champions />
            </div>
          );
        case "Matchups":
          return (
            <div className="selected-tab">
              <Matchups key={JSON.parse(localStorage.getItem("user")).name}/>
            </div>
          );
        case "Skills":
          return (
            <div className="selected-tab">
              <Skills key={JSON.parse(localStorage.getItem("user")).name}/>
            </div>
          );
        case "Statistics":
          return (
            <div className="selected-tab">
              <Statistics key={JSON.parse(localStorage.getItem("user")).name}/>
            </div>
          );
        case "Training":
          return (
            <div className="selected-tab">
              <Training key={JSON.parse(localStorage.getItem("user")).name}/>
            </div>
          );
        case "Settings":
          return (
            <div className="selected-tab">
              <Settings key={JSON.parse(localStorage.getItem("user")).name}/>
            </div>
          );
        case "Contact":
          return (
            <div className="selected-tab">
              <Contact />
            </div>
          );
        default:
          return (
            <div className="selected-tab">
              <Profile key={JSON.parse(localStorage.getItem("user")).name}/>
            </div>
          );
      }
    } else {
      return (
        <div className="selected-tab">
          <h2>
            No user found please search an user to start monitoring your stats
          </h2>
        </div>
      );
    }
  }
}
export default SelectedTab;
