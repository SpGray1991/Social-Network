import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src="https://www.logo.wine/a/logo/Bitcoin/Bitcoin-Logo.wine.svg"></img>
      <div>
        {props.isAuth ? (
          <div>
            {props.login} - <button onClick={props.logout}>Log Out</button>
          </div>
        ) : (
          <NavLink
            to="/login"
            className={(navData) => (navData.isActive ? s.active : s.item)}
          >
            Login
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
