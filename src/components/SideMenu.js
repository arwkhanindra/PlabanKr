import "../styles/SideMenu.css";

const SideMenu = () => {
  return (
    <div className="side-menu">
      <div className="side-menu-option-groups">
        <div className="side-menu-option">
          <i className="fa fa-home"></i> Home
        </div>
        <div className="side-menu-option">
          <i className="fa fa-compass"></i> Discover
        </div>
      </div>
      <hr />
      <div className="side-menu-option-groups">
        <div className="side-menu-option">
          <i className="fa fa-bars"></i> Playlist
        </div>
        <div className="side-menu-option">
          <i className="fa fa-heart"></i> Favourite
        </div>
        <div className="side-menu-option">
          <i className="fa fa-history"></i> Watch History
        </div>
      </div>
      <hr />
      <div className="side-menu-option-groups">
        <div className="side-menu-option">
          <i className="fa fa-usd"></i> Subscription
        </div>
        <div className="side-menu-option">
          <i className="fa fa-user"></i> Profile
        </div>
        <div className="side-menu-option">
          <i className="fa fa-cog"></i> Settings
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
