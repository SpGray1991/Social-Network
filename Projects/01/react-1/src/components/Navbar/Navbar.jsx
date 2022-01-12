import { NavLink } from "react-router-dom";
import DialogItem from "../Dialogs/DialogItem/DialogItem";
import s from "./Navbar.module.css";

const Navbar = (props) => {
  let dialogsElements = props.dialogPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} />
  ));

  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink
          to="/profile"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/dialogs"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/users"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Users
        </NavLink>
      </div>
      <div className={s.item}>
        <a href="#">News</a>
      </div>
      <div className={s.item}>
        <a href="#">Music</a>
      </div>
      <div className={s.item}>
        <a href="#">Settings</a>
      </div>
      <div className={s.title}>Friends</div>
      <div className={s.friends}>
        <div className={s.dialog_items}>{dialogsElements}</div>
      </div>
    </nav>
  );
};

export default Navbar;
