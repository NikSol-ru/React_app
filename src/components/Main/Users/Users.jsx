import React from "react";
import c from "./Users.module.css";
import photoAva from "../../../assets/images/man.png";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={c.users}>
      <div className={c.selectedPageContainer}>
        {pages.map((p) => (
          <span
            key={p}
            onClick={() => {
              props.onPageChanged(p);
            }}
            className={props.currentPage === p ? c.selectedPage : undefined}
          >
            {p}
          </span>
        ))}
      </div>
      <h2>Пользователи</h2>
      {props.users.map((u) => (
        <div key={u.id} className={c.userContainer}>
          <div className={c.userAvaButton}>
            <img
              src={u.photos.small === null ? photoAva : u.photos.small}
              alt="ava"
              className={c.ava}
            />
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
              <p className={c.fullName}>{u.name}</p>
              <div className={c.location}>
                <p className={c.city}>{u.id}</p>
                <p className={c.country}>{"u.location.country"}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
