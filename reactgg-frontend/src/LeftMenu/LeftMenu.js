import "./LeftMenu.scss";

function LeftMenu({ setSelectedTab }) {
  return (
    <div className="LeftMenu">
      <span onClick={() => setSelectedTab("Profil")}>
        <h2>Profile</h2>
        <img src="blank" alt="" />
      </span>
      <span onClick={() => setSelectedTab("Live Game")}>
        <h2>Live Game</h2>
        <img src="blank" alt="" />
      </span>
      <span onClick={() => setSelectedTab("Champions")}>
        <h2>Champions</h2>
        <img src="blank" alt="" />
      </span>
      <span onClick={() => setSelectedTab("Matchups")}> 
        <h2>Matchups</h2>
        <img src="blank" alt="" />
      </span>
      <span onClick={() => setSelectedTab("Skills")}>
        <h2>Skills</h2>
        <img src="blank" alt="" />
      </span>
      <span onClick={() => setSelectedTab("Statistics")}>
        <h2>Statistics</h2>
        <img src="blank" alt="" />
      </span>
      <span onClick={() => setSelectedTab("Training")}>
        <h2>Training</h2>
        <img src="blank" alt="" />
      </span>
      <span onClick={() => setSelectedTab("Settings")}>
        <h2>Settings</h2>
        <img src="blank" alt="" />
      </span>
      <span onClick={() => setSelectedTab("Contact")}>
        <h2>Contact</h2>
        <img src="blank" alt="" />
      </span>
    </div>
  );
}

export default LeftMenu;
