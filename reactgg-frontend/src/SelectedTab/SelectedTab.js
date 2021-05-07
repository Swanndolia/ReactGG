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
    selectedTab: this.props,
  };
  changeSelectedTab(tab) {
    this.setState({ selectedTab: tab });
  }
  render() {
    switch (this.state.selectedTab) {
      case "Profile":
        return (
          <div className="SelectedTab">
            <Profile />
          </div>
        );
      case "Live Game":
        return (
          <div className="SelectedTab">
            <LiveGame />
          </div>
        );
      case "Champions":
        return (
          <div className="SelectedTab">
            <Champions />
          </div>
        );
      case "Matchups":
        return (
          <div className="SelectedTab">
            <Matchups />
          </div>
        );
      case "Skills":
        return (
          <div className="SelectedTab">
            <Skills />
          </div>
        );
      case "Statistics":
        return (
          <div className="SelectedTab">
            <Statistics />
          </div>
        );
      case "Training":
        return (
          <div className="SelectedTab">
            <Training />
          </div>
        );
      case "Settings":
        return (
          <div className="SelectedTab">
            <Settings />
          </div>
        );
      case "Contact":
        return (
          <div className="SelectedTab">
            <Contact />
          </div>
        );
      default:
        return (
          <div className="SelectedTab">
            <Profile />
          </div>
        );
    }
  }
}
export default SelectedTab;
