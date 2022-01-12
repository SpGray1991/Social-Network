import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.item}>
      <NavLink to={path}>
        <img
          className={s.avatar}
          src="http://cs622426.vk.me/v622426834/409d/baLqspYwi84.jpg"
        ></img>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
