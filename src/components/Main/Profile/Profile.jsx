import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile}></ProfileInfo>
      <MyPostsContainer store={props.profile}></MyPostsContainer>
    </div>
  );
};

export default Profile;
