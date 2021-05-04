import "./SelectedTab.scss";

function Profil() {
  return <h2>Profil</h2>;
}

function Champions() {
  return <h2>Champions</h2>;
}

function SelectedTab(props) {
  const selectedTab = props.selectedTab;
  console.log(props.selectedTab)
  switch (selectedTab) {
    case "Champions":
      return (
        <div key={props.selectedTab} className="SelectedTab">
          <Profil />
        </div>
      );

    case "Profil":
      return (
        <div key={props.selectedTab} className="SelectedTab">
          <Champions />
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
