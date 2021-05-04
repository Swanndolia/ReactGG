import "./LeftMenu.scss";

function LeftMenu({ setSelectedTab }) {
  return (
    <div className="LeftMenu">
      <span onClick={() => setSelectedTab("Profil")}>
        <h2>Profil</h2>
        <img src="blank" alt="" />
      </span>
      <span onClick={() => setSelectedTab("Champions")}>
        <h2>Champions</h2>
        <img src="blank" alt="" />
      </span>
      <span onClick={() => setSelectedTab("Profil")}>
        <h2>Random Text</h2>
        <img src="blank" alt="" />
      </span>
      <span onClick={() => setSelectedTab("Profil")}>
        <h2>Random Text</h2>
        <img src="blank" alt="" />
      </span>
      <span onClick={() => setSelectedTab("Profil")}>
        <h2>Random Text</h2>
        <img src="blank" alt="" />
      </span>
      <span onClick={() => setSelectedTab("Profil")}>
        <h2>Random Text</h2>
        <img src="blank" alt="" />
      </span>
      <span onClick={() => setSelectedTab("Profil")}>
        <h2>Random Text</h2>
        <img src="blank" alt="" />
      </span>
    </div>
  );
}

export default LeftMenu;
