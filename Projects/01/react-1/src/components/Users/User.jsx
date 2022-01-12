import React from "react";
import s from "./Users.module.css";
import usersPhoto from "../../Img/images.jpg";
import { NavLink } from "react-router-dom";

let User = ({ user, followingInProgress, unfollow, follow }) => {
  return (
    <div className={s.user}>
      <div>
        <NavLink to={"/profile/" + user.id}>
          <img
            className={s.avatar}
            src={user.photos.small != null ? user.photos.small : usersPhoto}
          ></img>
        </NavLink>
        {user.followed ? (
          <button
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              unfollow(user.id);
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              follow(user.id);
            }}
          >
            Follow
          </button>
        )}
      </div>
      <span>
        <div>{user.name}</div>
        <div>{user.status}</div>
      </span>

      <div>
        <div>{"u.location.country"}</div>

        <div>{"u.location.city"}</div>
      </div>
    </div>
  );
};

export default User;
