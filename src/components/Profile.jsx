import "./Profile.css";

const Profile = () => {
  return (
    <div className="content">
      <img
        className="content_img"
        src="https://gt-news.ru/wp-content/uploads/2020/11/gt-news-bmw-ix-10-690x380.jpg"
        alt="auto"
      ></img>
      <div className="description">
        <img
          className="avatar"
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
      <div>
        <p>New Post</p>
      </div>
      <div>
        <p>Post1</p>
      </div>
      <div>
        <p>Post2</p>
      </div>
    </div>
  );
};

export default Profile;
