import "./SelectedTab.scss";

function Profil() {
  return <h2>Profil</h2>;
}
function LiveGame() {
  return <h2>Live Game</h2>;
}
function Champions() {
  return <h2>Champions</h2>;
}
function Matchups() {
  return <h2>Matchups</h2>;
}
function Skills() {
  return <h2>Skills</h2>;
}
function Statistics() {
  return <h2>Statistics</h2>;
}
function Training() {
  return <h2>Training</h2>;
}
function Settings() {
  return <h2>Settings</h2>;
}
function Contact() {
  return <h2>Contact</h2>;
}

function SelectedTab(props) {
  const selectedTab = props.selectedTab;
  console.log(props);
  switch (selectedTab) {
    case "Profil":
      return (
        <div key={props.selectedTab} className="SelectedTab">
          <Profil />
        </div>
      );
    case "Live Game":
      return (
        <div key={props.selectedTab} className="SelectedTab">
          <LiveGame />
        </div>
      );
    case "Champions":
      return (
        <div key={props.selectedTab} className="SelectedTab">
          <Champions />
        </div>
      );
    case "Matchups":
      return (
        <div key={props.selectedTab} className="SelectedTab">
          <Matchups />
        </div>
      );
    case "Skills":
      return (
        <div key={props.selectedTab} className="SelectedTab">
          <Skills />
        </div>
      );
    case "Statistics":
      return (
        <div key={props.selectedTab} className="SelectedTab">
          <Statistics />
        </div>
      );
    case "Training":
      return (
        <div key={props.selectedTab} className="SelectedTab">
          <Training />
        </div>
      );
    case "Settings":
      return (
        <div key={props.selectedTab} className="SelectedTab">
          <Settings />
        </div>
      );
    case "Contact":
      return (
        <div key={props.selectedTab} className="SelectedTab">
          <Contact />
        </div>
      );
    default:
      return (
        <div key={props.selectedTab} className="SelectedTab">
          <Profil />
        </div>
      );
  }
}
export default SelectedTab;
