import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import c from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div>
      <img
        className={c.content_img}
        src="https://gt-news.ru/wp-content/uploads/2020/11/gt-news-bmw-ix-10-690x380.jpg"
        alt="auto"
      ></img>
      <ProfileInfo userName="Николай" userBirthday="03.09.1979"></ProfileInfo>
      <MyPostsContainer store={props.store}></MyPostsContainer>
    </div>
  );
};

export default Profile;
