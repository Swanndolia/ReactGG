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

function SelectedTab(props) {
  const selectedTab = props.selectedTab;
  switch (selectedTab) {
    case "Profile":
      return (
        <div key={selectedTab} className="SelectedTab">
          <Profile />
        </div>
      );
    case "Live Game":
      return (
        <div key={selectedTab} className="SelectedTab">
          <LiveGame />
        </div>
      );
    case "Champions":
      return (
        <div key={selectedTab} className="SelectedTab">
          <Champions />
        </div>
      );
    case "Matchups":
      return (
        <div key={selectedTab} className="SelectedTab">
          <Matchups />
        </div>
      );
    case "Skills":
      return (
        <div key={selectedTab} className="SelectedTab">
          <Skills />
        </div>
      );
    case "Statistics":
      return (
        <div key={selectedTab} className="SelectedTab">
          <Statistics />
        </div>
      );
    case "Training":
      return (
        <div key={selectedTab} className="SelectedTab">
          <Training />
        </div>
      );
    case "Settings":
      return (
        <div key={selectedTab} className="SelectedTab">
          <Settings />
        </div>
      );
    case "Contact":
      return (
        <div key={selectedTab} className="SelectedTab">
          <Contact />
        </div>
      );
    default:
      return (
        <div key={selectedTab} className="SelectedTab">
          <Profile />
        </div>
      );
  }
}
export default SelectedTab;
