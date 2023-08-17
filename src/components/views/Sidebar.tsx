import { sideBarData } from "../../data/sideBarData";
import "../../styles/sideBar.css";
import logo from "../../assets/Logo.png";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <img className="sidebar__image" src={logo} alt="app-logo" />
      <button className="sidebar__button">Send money</button>

      <ul className="sidebar__ul">
        {sideBarData.map((el, index) => (
          <li className="sidebar__li" key={index}>
            <div className="sidebar__list">
              {<el.icon classN="sidebar__list" />}
              <p>{el.page}</p>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
