import c from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div className={c.description}>
      <img
        className={c.avatar}
        src="https://img.freepik.com/premium-vector/portrait-of-a-young-man-with-beard-and-hair-style-male-avatar-vector-illustration_266660-423.jpg"
        alt="ava"
      ></img>
      <div className="userInfo">
        <p>{props.userName}</p>
        <p>Дата рождения: {props.userBirthday}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
