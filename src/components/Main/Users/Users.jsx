import React from "react";
import c from "./Users.module.css";
import photoAva from "../../../assets/images/man.png";
import { NavLink } from "react-router-dom";
import axios from "axios";

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
      {props.users.map((u, i) => (
        <div key={u.id} className={c.userContainer}>
          <div className={c.userAvaButton}>
            <NavLink to={"../profile/" + u.id}>
              <img
                src={u.photos.small === null ? photoAva : u.photos.small}
                alt="ava"
                className={c.ava}
              />
            </NavLink>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.toggleFollowingProgress(true, u.id);
                    axios
                      .delete(
                        `https://social-network.samuraijs.com/api/1.0//follow/${u.id}`,
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "83f7e25f-303c-465d-8399-6de4a424aac3",
                          },
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.unfollow(u.id);
                        }
                        props.toggleFollowingProgress(false, u.id);
                      });
                  }}
                  className={c.buttonFollow}
                >
                  Удалить из друзей
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.toggleFollowingProgress(true, u.id);
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0//follow/${u.id}`,
                        {},
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "83f7e25f-303c-465d-8399-6de4a424aac3",
                          },
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.follow(u.id);
                        }
                        props.toggleFollowingProgress(false, u.id);
                      });
                  }}
                  className={c.buttonFollow}
                >
                  Добавить в друзья
                </button>
              )}
            </div>
          </div>
          <NavLink to={"../profile/" + u.id} className={c.userText}>
            <div className={c.user}>
              <p className={c.fullName}>{u.name}</p>
              <div className={c.location}>
                <p className={c.city}>{u.id}</p>
                <p className={c.country}>
                  {i + 1 + (props.currentPage - 1) * 100}
                </p>
              </div>
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Users;
