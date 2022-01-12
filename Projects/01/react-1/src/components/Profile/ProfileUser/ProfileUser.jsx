import s from "./ProfileUser.module.css";
import Preloader from "../../Common/Preloader/Preloader";
import usersPhoto from "../../../Img/images.jpg";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const ProfileUser = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <>
      <div className={s.bg_top}></div>
      <img
        className={s.avatar}
        src={
          props.profile.photos.small != null
            ? props.profile.photos.small
            : usersPhoto
        }
      />
      <ProfileStatusWithHooks
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <div className={s.about_user}>
        <h1 className={s.title}>
          {props.profile.fullName} {props.profile.aboutMe}
        </h1>
        <p>Date of birthday: 18 july </p>
        <p>City: Zaporizhzhia </p>
        <p>Education: ZNTU </p>
        <p>
          Web-site:
          {props.profile.contacts.facebook}
        </p>
      </div>
    </>
  );
};

export default ProfileUser;
