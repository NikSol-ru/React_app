import c from "./ProfileInfo.module.css";
import avatar from "../../../../assets/images/man.png";
import Preloader from "../../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader></Preloader>;
  }
  return (
    <div className={c.description}>
      <img
        className={c.avatar}
        src={
          props.profile.photos.large === null
            ? avatar
            : props.profile.photos.large
        }
        alt="ava"
      ></img>
      <div className="userInfo">
        <p>{props.profile.fullName}</p>
        <p>{props.profile.contacts.facebook}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
