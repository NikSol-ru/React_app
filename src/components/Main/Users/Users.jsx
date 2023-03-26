import React from "react";
import c from "./Users.module.css";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        avatarUrl:
          "https://w7.pngwing.com/pngs/165/652/png-transparent-businessperson-computer-icons-avatar-avatar-heroes-public-relations-business.png",
        followed: false,
        fullName: "Коля",
        location: { city: "Южно-Подольск", country: "Россия" },
      },
      {
        id: 2,
        avatarUrl:
          "https://w7.pngwing.com/pngs/165/652/png-transparent-businessperson-computer-icons-avatar-avatar-heroes-public-relations-business.png",
        followed: false,
        fullName: "Гуля",
        location: { city: "Омск", country: "Россия" },
      },
      {
        id: 3,
        avatarUrl:
          "https://w7.pngwing.com/pngs/165/652/png-transparent-businessperson-computer-icons-avatar-avatar-heroes-public-relations-business.png",
        followed: true,
        fullName: "Петрович",
        location: { city: "Омск", country: "Россия" },
      },
      {
        id: 4,
        avatarUrl:
          "https://w7.pngwing.com/pngs/165/652/png-transparent-businessperson-computer-icons-avatar-avatar-heroes-public-relations-business.png",
        followed: true,
        fullName: "Артем",
        location: { city: "Омск", country: "Россия" },
      },
      {
        id: 5,
        avatarUrl:
          "https://w7.pngwing.com/pngs/165/652/png-transparent-businessperson-computer-icons-avatar-avatar-heroes-public-relations-business.png",
        followed: true,
        fullName: "Туман",
        location: { city: "Омск", country: "Россия" },
      },
    ]);
  }

  return (
    <div className={c.users}>
      <h2>Пользователи</h2>
      {props.users.map((u) => (
        <div key={u.id} className={c.userContainer}>
          <div className={c.userAvaButton}>
            <img src={u.avatarUrl} alt="ava" className={c.ava} />
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                  className={c.buttonFollow}
                >
                  Удалить из друзей
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                  className={c.buttonFollow}
                >
                  Добавить в друзья
                </button>
              )}
            </div>
          </div>
          <div className={c.userText}>
            <div className={c.user}>
              <p className={c.fullName}>{u.fullName}</p>
              <div className={c.location}>
                <p className={c.city}>{u.location.city}</p>
                <p className={c.country}>{u.location.country}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
