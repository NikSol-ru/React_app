import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <img
        className={s.content_img}
        src="https://gt-news.ru/wp-content/uploads/2020/11/gt-news-bmw-ix-10-690x380.jpg"
        alt="auto"
      ></img>
      <div className={s.description}>
        <img
          className={s.avatar}
          src="https://img.freepik.com/premium-vector/portrait-of-a-young-man-with-beard-and-hair-style-male-avatar-vector-illustration_266660-423.jpg"
          alt="ava"
        ></img>
        <p>
          На фоне глобального экономического кризиса практически половина
          крупнейших немецких компаний была вынуждена сократить производство,
          что приведет к повальным потерям в экономике в размере 85 млрд
          долларов ежегодно.
        </p>
      </div>
      <MyPosts></MyPosts>
    </div>
  );
};

export default Profile;