import "./LeftMenu.scss";

function LeftMenu({ setSelectedTab }) {
  return (
    <div className="LeftMenu">
      <span onClick={() => setSelectedTab("Profil")}>
        <h3>Profile</h3>
        <img src="blank" alt="" />
      </span>
      <span onClick={() => setSelectedTab("Live Game")}>
        <h3>Live Game</h3>
        <img src="blank" alt="" />
      </span>
      <span onClick={() => setSelectedTab("Champions")}>
        <h3>Champions</h3>
        <img src="blank" alt="" />
      </span>
      <span onClick={() => setSelectedTab("Matchups")}> 
        <h3>Matchups</h3>
        <img src="blank" alt="" />
      </span>
      <span onClick={() => setSelectedTab("Skills")}>
        <h3>Skills</h3>
        <img src="blank" alt="" />
      </span>
      <span onClick={() => setSelectedTab("Statistics")}>
        <h3>Statistics</h3>
        <img src="blank" alt="" />
      </span>
      <span onClick={() => setSelectedTab("Training")}>
        <h3>Training</h3>
        <img src="blank" alt="" />
      </span>
      <span onClick={() => setSelectedTab("Settings")}>
        <h3>Settings</h3>
        <img src="blank" alt="" />
      </span>
      <span onClick={() => setSelectedTab("Contact")}>
        <h3>Contact</h3>
        <img src="blank" alt="" />
      </span>
    </div>
  );
}

export default LeftMenu;
