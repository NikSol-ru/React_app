import axios from "axios";
import React from "react";
import c from "./Users.module.css";
import photoAva from "../../../assets/images/man.png";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users/?page=1&count=100`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUserCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users/?page=${pageNumber}&count=100`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUserCount(response.data.totalCount);
      });
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
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
                this.onPageChanged(p);
              }}
              className={
                this.props.currentPage === p ? c.selectedPage : undefined
              }
            >
              {p}
            </span>
          ))}
        </div>
        <h2>Пользователи</h2>
        {this.props.users.map((u) => (
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
                      this.props.unfollow(u.id);
                    }}
                    className={c.buttonFollow}
                  >
                    Удалить из друзей
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id);
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
                  <p className={c.city}>{"u.location.city"}</p>
                  <p className={c.country}>{"u.location.country"}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
