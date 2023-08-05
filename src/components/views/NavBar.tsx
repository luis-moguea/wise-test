import "../../styles/navbar.css";
import profilePic from "../../assets/Ellipse 3.svg";
import bell from "../../../public/icons/bell.svg";
import arrow from "../../../public/icons/chevron-down.svg";

const NavBar = () => {
  return (
    <div className="navbar__main">
      <nav className="navbar">
        <div className="navbar__notify">
          <img className="navbar__notify--bell" src={bell} alt="bell-svg" />
        </div>
        <div className="navbar__profile">
          <img
            className="navbar__profile--img"
            src={profilePic}
            alt="profile-pic"
          />
          <p className="navbar__profile--user">Rosemary Harris</p>
          <img
            className="navbar__profile--arrow"
            src={arrow}
            alt="arrow-down"
          />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
